import Spinner from "@JCKConsultant/components/home/Spinner"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import { promotionValidatorScheme } from "@JCKConsultant/lib/validator/miscValidators"
import { InitPromotVals } from "@JCKConsultant/pages/dashboard/promotions/create"
import { emitFetchPromotions } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { togglePromotionPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { DeletePromoCode, UpdatePromoCode } from "@JCKConsultant/services/promo/promo.apis"
import { PromotionInterface } from "@JCKConsultant/types"
import { ErrorMessage, Field, Form, Formik } from "formik"
import dynamic from "next/dynamic"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type UpdatePromotionFormProps = {
	promo?: PromotionInterface
}
export default function UpdatePromotionForm({ promo }: UpdatePromotionFormProps) {
	const dispatcher = useDispatch()

	const initVals: InitPromotVals = {
		valid_from: promo?.valid_from,
		valid_to: promo?.valid_to,
		disc_percentage: promo?.disc_percentage as any as string
	}

	const updatePromotionApi = useMutation(UpdatePromoCode, {
		onSuccess(res: any) {
			Success("Success", res?.message)
			dispatcher(emitFetchPromotions(true))
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isUpdating = updatePromotionApi.isLoading

	const _handleSubmit = (values: InitPromotVals) => updatePromotionApi.mutateAsync({ id: promo?.promo_id, data: values })

	// -------------------> Delete promotion

	const deletePromotionApi = useMutation(DeletePromoCode, {
		onSuccess: () => {
			Success("Success", "Promotion deleted")
			dispatcher(emitFetchPromotions(true))
			dispatcher(togglePromotionPanel({ status: false, params: null }))
		},
		onError: e => ServerErrors("Error", e)
	})
	const isDeleting = deletePromotionApi.isLoading

	const _handleDelete = () => deletePromotionApi.mutateAsync(promo?.promo_id)
	return (
		<>
			<InitTailwindUI />
			<Formik initialValues={initVals} onSubmit={_handleSubmit} validationSchema={promotionValidatorScheme}>
				{({ handleChange, values }) => (
					<Form className="space-y-6 text-black">
						<div className="relative mb-4" data-te-input-wrapper-init>
							<Field
								id="promoForm_validFromInput"
								name="valid_from"
								type="datetime-local"
								value={values?.valid_from}
								onChange={handleChange}
								className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							/>

							<label
								htmlFor="promoForm_validFromInput"
								className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
							>
								Promo starting date
							</label>
							<ErrorMessage name="valid_from" component={"p"} className="text-red-600 mt-2 p-2" />
						</div>

						<div className="relative mb-4" data-te-input-wrapper-init>
							<Field
								id="promoForm_validTo"
								name="valid_to"
								type="datetime-local"
								value={values?.valid_to}
								onChange={handleChange}
								className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							/>
							<label
								htmlFor="promoForm_validTo"
								className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
							>
								Promo ending date
							</label>
							<ErrorMessage name="valid_to" component={"p"} className="text-red-600 mt-2 p-2" />
						</div>

						<div>
							<div className="relative my-5" data-te-input-wrapper-init>
								<Field
									id="promoForm_percentageDisc"
									name="disc_percentage"
									type="number"
									onChange={handleChange}
									value={values?.disc_percentage}
									className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
								/>
								<label
									htmlFor="promoForm_percentageDisc"
									className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
								>
									Discount Percentage
								</label>
								<ErrorMessage name="disc_percentage" component={"p"} className="text-red-600 mt-2 p-2" />
							</div>
						</div>

						<div className="flex gap-8 items-center">
							<button
								disabled={isDeleting || isUpdating}
								type="submit"
								className="flex w-full justify-center rounded-md bg-blue disabled:bg-blue/50 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{!isUpdating && "Save changes"}
								{isUpdating && <Spinner />}
							</button>

							<button
								onClick={_handleDelete}
								disabled={isDeleting || isUpdating}
								type="button"
								className="flex w-full justify-center rounded-md border border-red-400 disabled:border-red-400/50 p-3 text-sm font-semibold leading-6 text-primary shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{!isDeleting && "Delete"}
								{isDeleting && <Spinner />}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	)
}
