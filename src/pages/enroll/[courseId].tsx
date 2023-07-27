import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigsAuthorizedOnly } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import UserDashLayout from "@JCKConsultant/components/user/layout/UserDashLayout"
import OrderSummary from "@JCKConsultant/components/misc/OrderSummary"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { loginValidatorScheme } from "@JCKConsultant/lib/validator/authValidtor"
import { CourseInterface, DiscountCodeInterface, PromotionInterface } from "@JCKConsultant/types/course"
import { useMutation } from "react-query"
import { FetchCourse } from "@JCKConsultant/services/course/course.apis"
import { Info, ServerErrors } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"
import { ApplyPromoCode } from "@JCKConsultant/services/promo/promo.apis"
import { promoCodeValidatorScheme } from "@JCKConsultant/lib/validator/miscValidators"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	code: string
	course_id?: string
}
export default function UserDashboard({ configs }: AppConfigs) {
	const router = useRouter()
	const { courseId, DiscoutCode } = router?.query
	const [course, setCourse] = React.useState<CourseInterface>()
	const [promo, setPromo] = React.useState<DiscountCodeInterface>()

	const fetchCourseApi = useMutation(FetchCourse, {
		onSuccess(res: any) {
			if (res?.status) setCourse(res?.data)
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isLoading = fetchCourseApi.isLoading

	React.useEffect(() => {
		fetchCourseApi.mutateAsync(courseId)
	}, [courseId])

	// --------------> apply promo code

	const applyDiscountApi = useMutation(ApplyPromoCode, {
		onSuccess(res: any) {
			if (res?.status) {
				Info("Discount", res?.message)
				setPromo(res?.data)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Discount", error)
		}
	})
	const isApplying = applyDiscountApi.isLoading

	const _handleSubmit = (values: InitValsProps) => {
		values.course_id = courseId as string
		applyDiscountApi.mutateAsync(values)
	}

	const initVals: InitValsProps = {
		code: DiscoutCode as string
	}

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Dashboard">
			<UserDashLayout>
				<div className="flex flex-col gap-8 items-center justify-center">
					{!isLoading && (
						<>
							<InitTailwindUI />
							<div className="shadow rounded-md p-3 min-w-[50%]">
								<OrderSummary productName={course?.title} productPrice={course?.price} productDiscount={promo?.discounted_amount} />
							</div>

							<div className="shadow rounded-md p-3 min-w-[50%]">
								<Formik initialValues={initVals} onSubmit={_handleSubmit} validationSchema={promoCodeValidatorScheme}>
									{({ handleChange, values }) => (
										<Form className="flex gap-4 items-center">
											<div className="relative w-full" data-te-input-wrapper-init>
												<Field
													id="promoCodeForm_promoCodeInput"
													name="code"
													type="text"
													value={values?.code}
													onChange={handleChange}
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												/>
												<label
													htmlFor="promoCodeForm_promoCodeInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
												>
													Enter promo code
												</label>
												<ErrorMessage name="code" component={"p"} className="text-red-600 mt-2 p-2" />
											</div>

											<div className="">
												<button
													disabled={isApplying}
													className="border-2 border-primary text-primary p-3.5 disabled:from-blue-800/50 disabled:to-blue/50 mb-3   w-fit rounded   text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
													type="submit"
													data-te-ripple-init
													data-te-ripple-color="light"
												>
													{!isApplying && "Apply"}
													{isApplying && <Spinner />}
												</button>
											</div>
										</Form>
									)}
								</Formik>
							</div>

							<button
								className="bg-gradient-to-r from-blue-800 to-blue disabled:from-blue-800/50 disabled:to-blue/50 mb-3 inline-block w-fit rounded p-4 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
								type="submit"
								data-te-ripple-init
								data-te-ripple-color="light"
							>
								Checkout
							</button>
						</>
					)}

					{isLoading && <Spinner classes="text-3xlg" />}
				</div>
			</UserDashLayout>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigsAuthorizedOnly(context)
}
