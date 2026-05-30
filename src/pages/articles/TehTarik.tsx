import { Link } from 'react-router-dom';

export default function TehTarik() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Teh Tarik: Malaysia's Iconic Pulled Tea</h1>
      <div className="text-gray-600 mb-8"><time>Last updated: December 2024</time></div>
      <img src="https://images.pexels.com/photos/28671538/pexels-photo-28671538.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt="Malaysian food stall" className="w-full h-96 object-cover rounded-lg shadow-md mb-8"/>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl mb-6">Walk into any Malaysian kopitiam or mamak restaurant, and chances are someone's drinking teh tarik. That sweet, milky tea with the frothy top isn't just a beverage—it's a cultural icon that brings people together across all backgrounds.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Makes It "Pulled"?</h2>
        <p className="mb-4">Teh tarik literally means "pulled tea" in Malay. The name comes from the dramatic way it's prepared—pouring the tea back and forth between two containers from a height, creating a long stream of liquid. This isn't just for show, though it does look impressive.</p>
        <p className="mb-6">The pulling process serves several purposes. It cools down the hot tea to a drinkable temperature. It mixes the tea and condensed milk thoroughly. And most importantly, it aerates the mixture, creating that signature frothy top that makes teh tarik special.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Perfect Cup</h2>
        <p className="mb-4">Good teh tarik starts with strong black tea, usually a blend that can hold up to the addition of condensed and evaporated milk. The tea needs to be robust enough that its flavor doesn't get lost in all that sweetness and cream.</p>
        <p className="mb-6">The ratio of tea to milk to sugar is crucial and varies by personal preference. Some people like it sweeter, others prefer to taste more tea. A skilled teh tarik maker can adjust to your preferences, though you might need to specify "kurang manis" (less sweet) if you don't want it too sugary.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Art of the Pour</h2>
        <p className="mb-4">Watch someone good at making teh tarik and you'll see it's not as easy as it looks. They pour from increasing heights, creating a longer and longer stream without spilling a drop. The liquid arcs through the air, creating that satisfying whoosh sound.</p>
        <p className="mb-6">It takes practice to get the angle right, to know how much liquid to pour at once, and to create the perfect amount of froth. Bad technique results in either no froth or too much, and possibly tea splattered everywhere.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">More Than Just Tea</h2>
        <p className="mb-4">Teh tarik is deeply embedded in Malaysian social culture. It's what you drink during breakfast with roti canai, during afternoon tea breaks, or while catching up with friends. Mamak restaurants serve it all day, every day, always fresh and hot.</p>
        <p className="mb-6">The drink transcends ethnic and religious boundaries. Malay, Chinese, and Indian Malaysians all drink it. It's equally at home in upscale cafes and roadside stalls. That universal appeal is part of what makes it special.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Variations</h2>
        <p className="mb-4">Teh tarik is just one option on the Malaysian drinks menu. Teh O is tea without milk. Teh C uses evaporated milk instead of condensed. Teh halia adds ginger for extra warmth. Kopi (coffee) gets the same pulling treatment and variations.</p>
        <p className="mb-6">You can also order it ais (iced) or peng (iced in Hokkien), kosong (without sugar, though this is rare), or kurang manis (less sweet). Learning the drink ordering code is part of integrating into Malaysian food culture.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">National Drink Status</h2>
        <p className="mb-4">In 2010, the Malaysian government tried to nominate teh tarik for UNESCO Intangible Cultural Heritage status, though it didn't make it. Still, that attempt highlights how seriously Malaysians take this drink—it's not just tea, it's part of national identity.</p>
        <p className="mb-6">Teh tarik competitions exist where participants are judged on technique, presentation, and taste. The best can create incredibly long pours, sometimes from heights of over a meter, without spilling a drop.</p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Finding Good Teh Tarik</h2>
        <p className="mb-4">Almost every kopitiam and mamak in Malaysia serves teh tarik, but quality varies. The best versions have a good balance between tea flavor and sweetness, with a thick, creamy froth on top. The tea should be hot but not scalding, mixed thoroughly with no separation.</p>
        <p className="mb-6">Places that do high volume tend to be good because their tea is always fresh and their tea makers get lots of practice. Watch the preparation—if they're just stirring rather than pulling, you're not getting authentic teh tarik.</p>
        
        <p className="mb-6">Teh tarik might seem simple—just tea, milk, and sugar. But like many Malaysian foods, the magic is in the technique, the tradition, and the social experience around it. One cup of properly made teh tarik gives you a taste of Malaysian culture in liquid form.</p>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Explore More Malaysian Foods</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link to="/foods/roti-canai" className="text-blue-600 hover:underline">→ Roti Canai</Link>
          <Link to="/foods/nasi-lemak" className="text-blue-600 hover:underline">→ Nasi Lemak</Link>
          <Link to="/foods/cendol" className="text-blue-600 hover:underline">→ Cendol: Sweet Iced Dessert</Link>
          <Link to="/foods" className="text-blue-600 hover:underline">→ All Malaysian Foods</Link>
        </div>
      </div>
    </article>
  );
}