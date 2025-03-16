export default function Faq1({ cmp }) {
  return (
    <div className=''>
      <div className='container  max-w-screen-md'>
        <div className='mb-12'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight'>
            You might be wondering...
          </h2>
        </div>

        <div className='grid gap-4'>
          {cmp?.data?.map((el, i) => {
            return (
              <details key={i} name='qs' className='w-full border rounded-xl'>
                <summary className='py-4 px-6 text-black font-semibold'>{el.q}</summary>

                <div className='pb-6 px-10 leading-relaxed'>{el.a}</div>
              </details>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const qs = [
  {
    q: "Upgrade License Type",
    n: "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
  },
  {
    q: "How do I get access to a theme I purchased?",
    n: "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
  },
  {
    q: "How secure is Preline?",
    n: "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
  },
  {
    q: "How does Preline's pricing work?",
    n: "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
  },
  {
    q: "Can I cancel at anytime?",
    n: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
  },
  {
    q: "My team has credits. How do we use them?",
    n: " Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
  },
]
