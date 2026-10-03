export function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl min-h-[60vh]">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8">About LUXE</h1>
      <div className="prose dark:prose-invert prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Welcome to LUXE, your premier destination for high-quality electronics, 
          fashion, and lifestyle products. We believe that premium quality shouldn't 
          be a luxury, but a standard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              Our mission is to provide an unparalleled shopping experience by curating 
              only the finest products from trusted global brands. We focus on quality, 
              sustainability, and exceptional customer service.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become the world's most customer-centric e-commerce platform, where 
              people can discover and buy anything they might want online, with a focus 
              on premium design and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
