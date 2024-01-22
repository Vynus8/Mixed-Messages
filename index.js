// Sample data
const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const luckStatusArr = ["good", "neutral", "bad", "the Worst", "the Best"];
const advices = ["trust your instincts", "be open to new opportunities", "take a moment to reflect"];
const elements = ["fire", "earth", "air", "water"];
const actions = ["embrace change", "focus on your goals", "nurture relationships"];
const relationshipAdviceArr = ["patient with your partner", "communicative with loved ones", "open to new connections"];
const healthTips = ["stay hydrated", "get enough rest", "engage in physical activity"];
const careerInsights = ["take on new challenges", "collaborate with colleagues", "focus on skill development"];

// Function to generate a random item from an array
function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to generate a random astrological prediction
function generateAstrologicalPrediction() {
    const zodiacSign = getRandomItem(zodiacSigns);
    const luckStatus = getRandomItem(luckStatusArr);
    const advice = getRandomItem(advices);
    const element = getRandomItem(elements);
    const action = getRandomItem(actions);
    const relationshipAdvice = getRandomItem(relationshipAdviceArr);
    const healthTip = getRandomItem(healthTips);
    const careerInsight = getRandomItem(careerInsights);

    // Output the prediction
    console.log(`Your sign is ${zodiacSign}.`);
    console.log(`You are having ${luckStatus} luck.`);
    console.log(`You should: ${advice}`);
    console.log(`In the realm of ${element} elements, ${zodiacSign} signs are advised to ${action}.`);
    console.log(`In matters of the heart, be ${relationshipAdvice}.`);
    console.log(`Health tip: ${healthTip}`);
    console.log(`Career insight: ${careerInsight}`);
}

// Generate and output a random astrological prediction
generateAstrologicalPrediction();
