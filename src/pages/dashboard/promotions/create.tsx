import CreateOrEditCourseForm from "@JCKConsultant/components/dashboard/courses/CreateOrEditCourseForm"
import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import Spinner from "@JCKConsultant/components/home/Spinner"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { promotionValidatorScheme } from "@JCKConsultant/lib/validator/miscValidators"
import { CreatePromoCode } from "@JCKConsultant/services/promo/promo.apis"
import { DashboardProps, Meta } from "@JCKConsultant/types"
import { ErrorMessage, Field, Form, Formik } from "formik"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useMutation } from "react-query"

export type InitPromotVals = {
	valid_from?: string
	valid_to?: string
	disc_percentage?: string
}

export default function DashboardPromotionsCreate({ configs }: DashboardProps) {
	const router = useRouter()

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	const initVals: InitPromotVals = {
		valid_from: "",
		valid_to: "",
		disc_percentage: ""
	}

	const createPromoApi = useMutation(CreatePromoCode, {
		onSuccess(res: any) {
			Success("Success", res?.message)
			router?.back()
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isCreating = createPromoApi.isLoading

	const _handleSubmit = (values: InitPromotVals) => createPromoApi.mutateAsync(values)
	return (
		<DashboardLayout meta={metaData} title="Generate Promo Code" pageName="Promotions" siteConfigs={configs}>
			<DashboardContent title="Generate Promo Code" type="nav">
				<InitTailwindUI />
				<div className="block xs:mx-3 md:m-auto max-w-3xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
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

								<div>
									<button
										disabled={isCreating}
										type="submit"
										className="flex w-fit justify-center rounded-md bg-blue disabled:bg-blue/50 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										{!isCreating && "Generate"}
										{isCreating && <Spinner />}
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
