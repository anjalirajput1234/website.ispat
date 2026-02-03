import { Wrench, TriangleRight, Columns2, FileText, Circle, Spline } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    icon: Wrench,
    title: "MS TMT Bar",
    description: "High-strength reinforcement bars",
  },
  {
    icon: TriangleRight,
    title: "MS Angle",
    description: "Durable structural angles",
  },
  {
    icon: Columns2,
    title: "MS Channel",
    description: "Quality channel sections",
  },
  {
    icon: FileText,
    title: "MS Plate",
    description: "Various thickness plates",
  },
  {
    icon: Circle,
    title: "MS Pipe",
    description: "MS & GI pipes available",
  },
  {
    icon: Spline,
    title: "MS Wire Rod",
    description: "Premium wire products",
  },
]

export function ProductHighlights() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Our Products</h2>
          <p className="mt-2 text-muted-foreground">Wide range of quality steel products</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-xl border-2 border-transparent bg-secondary p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-green hover:shadow-lg hover:shadow-brand-green/10"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center text-brand-green">
                <product.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-brand-dark">{product.title}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            className="bg-brand-green text-white hover:bg-brand-green-light px-8"
          >
            <a href="#products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
