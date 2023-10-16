import { Metadata, NextPage } from 'next'

import Contacts from '@/components/screens/contacts/Contacts'

import { getMetadata } from '@/utils/seo/getMetadata'

import { pagesUri } from '@/constants/pages'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.contacts)

const ContactsPage: NextPage = () => <Contacts />

export default ContactsPage
