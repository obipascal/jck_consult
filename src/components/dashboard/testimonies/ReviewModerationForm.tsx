import Spinner from "@JCKConsultant/components/home/Spinner"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import { reivewModerationValidatorScheme } from "@JCKConsultant/lib/validator/miscValidators"
import { emitFetchPromotions, emitFetchReviews } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { togglePromotionPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { DeletePromoCode, UpdatePromoCode } from "@JCKConsultant/services/promo/promo.apis"
import { UpdateReview } from "@JCKConsultant/services/review/review.apis"
import { ReviewerInterface } from "@JCKConsultant/types/user"
import { ErrorMessage, Field, Form, Formik } from "formik"
import dynamic from "next/dynamic"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitReviewValsProps = {
	reviewer_message?: string
}
type ReviewModerationFormProps = {
	data?: ReviewerInterface
}
export default function ReviewModerationForm({ data }: ReviewModerationFormProps) {
	const dispatcher = useDispatch()

	const initVals: InitReviewValsProps = {
		reviewer_message: data?.reviewer_message
	}

	const updateReviewApi = useMutation(UpdateReview, {
		onSuccess(res: any) {
			Success("Success", res?.message)
			dispatcher(emitFetchReviews(true))
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isUpdating = updateReviewApi.isLoading

	const _handleSubmit = (values: InitReviewValsProps) => updateReviewApi.mutateAsync({ id: data?.review_id, data: values })

	return (
		<>
			<InitTailwindUI />
			<Formik initialValues={initVals} onSubmit={_handleSubmit} validationSchema={reivewModerationValidatorScheme}>
				{({ handleChange, values }) => (
					<Form className="space-y-6 text-black">
						<div className="relative mb-4" data-te-input-wrapper-init>
							<Field
								id="reviewForm_reviewMessageInput"
								name="reviewer_message"
								as="textarea"
								value={values?.reviewer_message}
								onChange={handleChange}
								className="peer block min-h-[150px] w-full rounded border-0 bg-transparent p-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							/>

							<label
								htmlFor="reviewForm_reviewMessageInput"
								className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
							>
								Reviewer Message
							</label>
							<ErrorMessage name="reviewer_message" component={"p"} className="text-red-600 mt-2 p-2" />
						</div>

						<div className="flex gap-8 items-center">
							<button
								disabled={isUpdating}
								type="submit"
								className="flex w-full justify-center rounded-md bg-blue disabled:bg-blue/50 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{!isUpdating && "Save changes"}
								{isUpdating && <Spinner />}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}
