import { Link } from 'react-router-dom';

export default function Satay() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Satay: The Art of Malaysian Grilled Meat Skewers
      </h1>
      
      <div className="text-gray-600 mb-8">
        <time>Last updated: December 2024</time>
      </div>

      <img 
        src="https://images.pexels.com/photos/37211348/pexels-photo-37211348.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
        alt="Satay skewers grilling over charcoal"
        className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
      />

      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">
          The smell of satay grilling over charcoal is one of those scents that instantly transports me 
          back to Malaysian night markets. There's something about that smoky aroma mixed with caramelizing 
          meat and spices that just captures the essence of Malaysian street food.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">More Than Just Meat on a Stick</h2>
        <p className="mb-4">
          Sure, satay might look like a simple concept—marinated meat grilled on bamboo skewers. But 
          there's an art to getting it right. The meat needs to be tender without being mushy, charred 
          without being burnt, and packed with flavor that goes beyond just the surface.
        </p>
        <p className="mb-6">
          Good satay vendors have been perfecting their craft for years, sometimes decades. They know 
          exactly how long to marinate the meat, how to arrange the coals for even heat, and when to 
          flip the skewers for that perfect char. It's one of those things that looks easy until you 
          try it yourself.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Marinade Makes the Difference</h2>
        <p className="mb-4">
          What sets Malaysian satay apart is the marinade. It's typically a blend of turmeric, 
          lemongrass, galangal, garlic, and shallots, along with other spices that vary by vendor. 
          This mixture doesn't just add flavor—it tenderizes the meat and gives satay its characteristic 
          yellow-orange color.
        </p>
        <p className="mb-6">
          The meat marinates for hours, sometimes overnight, allowing those flavors to penetrate deep. 
          When it hits the grill, the sugars in the marinade caramelize, creating that irresistible 
          combination of sweet, savory, and slightly charred notes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Satay</h2>
        <p className="mb-4">
          Chicken satay is probably the most common, made with chicken thigh meat that stays juicy 
          over high heat. Beef satay tends to be a bit chewier but has a deeper, richer flavor. 
          Mutton satay is less common but beloved by those who enjoy its distinct gamey taste.
        </p>
        <p className="mb-6">
          Some places also serve satay daging (beef intestine), which has a unique texture and flavor 
          that's definitely an acquired taste. If you're adventurous, it's worth trying at least once.
        </p>

        <img 
          src="https://images.pexels.com/photos/37205362/pexels-photo-37205362.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
          alt="Traditional satay grilling at a Malaysian street food stall"
          className="w-full h-80 object-cover rounded-lg shadow-md my-8"
        />

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Peanut Sauce</h2>
        <p className="mb-4">
          Satay without peanut sauce is like nasi lemak without sambal—technically possible, but 
          missing the whole point. The sauce should be thick and creamy, with a balance of sweet, 
          savory, and slightly spicy notes.
        </p>
        <p className="mb-6">
          Good peanut sauce has complexity beyond just ground peanuts. There's usually tamarind for 
          tanginess, palm sugar for sweetness, lemongrass for aroma, and chilies for heat. Some 
          vendors add a touch of coconut milk for extra richness. The best sauce I've ever had was 
          from a tiny stall in Kajang—they'd been using the same recipe for three generations.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accompaniments Matter</h2>
        <p className="mb-4">
          Satay typically comes with cubes of compressed rice cake (ketupat or lontong), cucumber 
          slices, and raw onions. These aren't just garnishes—they serve a purpose.
        </p>
        <p className="mb-6">
          The rice cake soaks up the peanut sauce and provides a neutral base that balances the 
          rich, flavorful meat. The cucumber and onions add freshness and crunch, cutting through 
          the richness and cleansing your palate between bites.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Where Satay Comes From</h2>
        <p className="mb-4">
          Satay's origins are a bit murky, but it likely developed from Indonesian influences, 
          possibly inspired by Arab or Indian kebabs brought by traders. Over time, it evolved into 
          something distinctly Southeast Asian.
        </p>
        <p className="mb-6">
          In Malaysia, satay has become deeply embedded in the food culture. It's what you eat at 
          late-night suppers, what appears at celebrations, and what you crave when you're abroad 
          and missing home.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Satay Kajang</h2>
        <p className="mb-4">
          If you're serious about satay, many Malaysians will tell you to visit Kajang, a town 
          outside Kuala Lumpur that's practically synonymous with the dish. The satay there has a 
          particular reputation—the meat is tender, the marinade is flavorful, and the peanut sauce 
          is exceptional.
        </p>
        <p className="mb-6">
          Whether Kajang satay is genuinely better or just benefits from good marketing is debatable. 
          What's certain is that the competition there is fierce, which tends to push quality up.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Satay</h2>
        <p className="mb-4">
          Look for places where satay is grilled fresh to order. If the meat looks like it's been 
          sitting around, go elsewhere. The best satay is hot off the grill, still sizzling slightly, 
          with those beautiful char marks.
        </p>
        <p className="mb-6">
          Watch the vendor at work. Experienced satay makers have a rhythm to their grilling—they 
          know exactly when to flip, when to fan the flames, and when the meat is done. That kind 
          of expertise can't be faked.
        </p>

        <p className="mb-6">
          Satay might seem simple, but it represents something important about Malaysian food culture—
          the ability to take a straightforward concept and elevate it through skill, tradition, and 
          attention to detail. Each bite of properly made satay is a small masterpiece of flavor, 
          texture, and technique. That's why it remains one of Malaysia's most beloved dishes.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">
            → Nasi Lemak: Malaysia's National Dish
          </Link>
          <Link to="/foods/rendang" className="text-blue-600 hover:underline">
            → Rendang: Slow-Cooked Beef
          </Link>
          <Link to="/foods/ikan-bakar" className="text-blue-600 hover:underline">
            → Ikan Bakar: Grilled Fish
          </Link>
          <Link to="/foods/char-kway-teow" className="text-blue-600 hover:underline">
            → Char Kway Teow: Stir-Fried Noodles
          </Link>
        </div>
      </div>
    </article>
  );
}