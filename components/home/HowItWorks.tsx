const steps = [
  {
    title: "Choose Your Chef",
    description: "Browse through our selection of talented home chefs and bakers",
    icon: "🔍"
  },
  {
    title: "Place Your Order",
    description: "Select your favorite dishes and customize your order",
    icon: "📝"
  },
  {
    title: "Fresh Preparation",
    description: "Your food is prepared fresh with love and care",
    icon: "👩‍🍳"
  },
  {
    title: "Quick Delivery",
    description: "Enjoy your delicious meal delivered to your doorstep",
    icon: "🚚"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white/90 mx-[5%] my-8 rounded-lg">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 