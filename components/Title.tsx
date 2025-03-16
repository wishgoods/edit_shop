export function Title1({ title = 'Yout Title', sub = 'Some profound insight for your customers' }) {
  return (
    <div className="max-w-3xl mb-4 if-p0">
      <h2 className="font-semibold text-700">{title}</h2>
      <p className="mt-2 text-gray-400">{sub}</p>
    </div>
  )
}
