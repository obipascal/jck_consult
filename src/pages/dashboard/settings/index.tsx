import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import ApplicationSettings from "@JCKConsultant/components/dashboard/settings/ApplicationSettings"
import FAQsSettings from "@JCKConsultant/components/dashboard/settings/FAQsSettings"
import ProfileSettings from "@JCKConsultant/components/dashboard/settings/ProfileSettings"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { DashboardProps, Meta } from "@JCKConsultant/types"
import React from "react"

export default function SettingsPage({ configs }: DashboardProps) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<DashboardLayout meta={metaData} title="Settings" pageName="Dashboard" siteConfigs={configs}>
			<DashboardContent title="Settings">
				<div className="bg-white shadow rounded-md md:p-8 xs:p-5">
					<ul className="mb-5 flex list-none xs:flex-col md:flex-row flex-wrap border-b-0 pl-0" role="tablist" data-te-nav-ref>
						<li role="presentation" className="flex-grow basis-0 text-center">
							<a
								href="#tabs-home02"
								className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
								data-te-toggle="pill"
								data-te-target="#tabs-home02"
								data-te-nav-active
								role="tab"
								aria-controls="tabs-home02"
								aria-selected="true"
							>
								Profile
							</a>
						</li>
						<li role="presentation" className="flex-grow basis-0 text-center">
							<a
								href="#tabs-profile02"
								className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
								data-te-toggle="pill"
								data-te-target="#tabs-profile02"
								role="tab"
								aria-controls="tabs-profile02"
								aria-selected="false"
							>
								Application
							</a>
						</li>

						<li role="presentation" className="flex-grow basis-0 text-center">
							<a
								href="#tabs-faqs"
								className="focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
								data-te-toggle="pill"
								data-te-target="#tabs-faqs"
								role="tab"
								aria-controls="tabs-faqs"
								aria-selected="false"
							>
								FAQs
							</a>
						</li>
					</ul>

					{/* <!--Tabs content--> */}
					<div className="mb-6">
						<div
							className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
							id="tabs-home02"
							role="tabpanel"
							aria-labelledby="tabs-home-tab02"
							data-te-tab-active
						>
							<div className="px-4 sm:px-0">
								<h3 className="text-base font-semibold leading-7 text-gray-900">Profile Information</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Update your personal profile details.</p>
							</div>
							<ProfileSettings />
						</div>
						<div className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-profile02" role="tabpanel" aria-labelledby="tabs-profile-tab02">
							<div className="px-4 sm:px-0">
								<h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Settings</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Configure the website settings here</p>
							</div>
							<ApplicationSettings settings={configs?.settings} />
						</div>

						<div className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-faqs" role="tabpanel" aria-labelledby="tabs-faqs">
							<div className="px-4 sm:px-0">
								<h3 className="text-base font-semibold leading-7 text-gray-900">Frequent Ask Questions (FAQs)</h3>
								<p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Add, Update or Remove system FAQs here.</p>
							</div>
							<FAQsSettings />
						</div>
					</div>
				</div>
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
