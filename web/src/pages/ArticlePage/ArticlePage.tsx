import { MetaTags } from '@redwoodjs/web'

const ArticlePage = () => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <section className="pt-40">
        <div className="flex flex-row justify-between">
          <div></div>
          <p className="text-blue-100">Pulished at June 24, 2022</p>
        </div>
        <div className="h-2 bg-primary"></div>
        <article className="mt-6 prose lg:prose-xl prose-invert">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
      </section>
    </>
  )
}

export default ArticlePage
