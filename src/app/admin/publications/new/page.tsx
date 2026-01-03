import { NewPublicationForm } from '~/components/admin/new-publication-form'

export default function NewPublicationPage() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-foreground mb-8 font-serif text-3xl">
        Create New Publication
      </h1>
      <NewPublicationForm />
    </div>
  )
}
