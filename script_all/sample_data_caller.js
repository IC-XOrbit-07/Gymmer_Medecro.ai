import { mockData } from './mock_data.js';
function generateRecommendations(user) {
    let recommendations = "";

    // Diet Recommendations
    if (user.genetic_insights.carbohydrate_sensitivity === "high") {
        recommendations += "We recommend a low-carb diet to help manage carbohydrate sensitivity.\n";
    } else if (user.genetic_insights.carbohydrate_sensitivity === "low") {
        recommendations += "You can include more carbohydrates in your diet.\n";
    } else if (user.genetic_insights.carbohydrate_sensitivity === "normal") {
        recommendations += "A balanced diet with moderate carbohydrates should work well for you.\n";
    }

    if (user.genetic_insights.fat_metabolism === "slow") {
        recommendations += "Since you metabolize fats slowly, try to limit fat intake and focus on healthy fats like olive oil or nuts.\n";
    } else if (user.genetic_insights.fat_metabolism === "fast") {
        recommendations += "You can handle fats well, so healthy fats like avocados and fatty fish can be part of your diet.\n";
    } else if (user.genetic_insights.fat_metabolism === "normal") {
        recommendations += "A balanced fat intake is recommended for you.\n";
    }

    if (user.genetic_insights.protein_needs === "high") {
        recommendations += "You require higher protein intake. Include more lean meats, fish, and legumes in your diet.\n";
    } else if (user.genetic_insights.protein_needs === "low") {
        recommendations += "You have lower protein needs. A moderate intake of protein from plant-based sources or lean meats should suffice.\n";
    } else if (user.genetic_insights.protein_needs === "normal") {
        recommendations += "A standard level of protein intake will suit your body.\n";
    }

    if (user.genetic_insights.lactose_intolerance === "yes") {
        recommendations += "Avoid dairy due to lactose intolerance, opt for lactose-free products or dairy alternatives like almond or soy milk.\n";
    } else if (user.genetic_insights.lactose_intolerance === "no") {
        recommendations += "You can include dairy products in your diet without issue.\n";
    }

    if (user.genetic_insights.caffeine_sensitivity === "high") {
        recommendations += "You have a high sensitivity to caffeine, so it's best to limit caffeinated drinks to avoid jitteriness or sleep issues.\n";
    } else if (user.genetic_insights.caffeine_sensitivity === "low") {
        recommendations += "You have a low sensitivity to caffeine, so you can handle a higher intake of caffeinated drinks like coffee or tea.\n";
    } else if (user.genetic_insights.caffeine_sensitivity === "normal") {
        recommendations += "Moderate caffeine intake should work well for you.\n";
    }

    // Fitness Recommendations
    if (user.genetic_insights.fitness_strength === "strength_training") {
        recommendations += "Focus on strength training exercises like weightlifting, bodyweight exercises, and resistance training.\n";
    } else if (user.genetic_insights.fitness_strength === "endurance") {
        recommendations += "Endurance exercises like running, cycling, or long-distance swimming would be ideal for you.\n";
    } else if (user.genetic_insights.fitness_strength === "cardio") {
        recommendations += "Cardio workouts like high-intensity interval training (HIIT) or aerobic exercises should be part of your routine.\n";
    } else if (user.genetic_insights.fitness_strength === "flexibility") {
        recommendations += "Focus on flexibility exercises like yoga, Pilates, or dynamic stretching to improve mobility.\n";
    }

    // Vitamin D Deficiency Risk Recommendations
    if (user.genetic_insights.vitamin_d_deficiency_risk === "high") {
        recommendations += "You have a high risk of vitamin D deficiency. Consider vitamin D supplements or include foods rich in vitamin D such as fatty fish, mushrooms, and fortified products.\n";
    } else if (user.genetic_insights.vitamin_d_deficiency_risk === "normal") {
        recommendations += "You have a normal risk of vitamin D deficiency. Regular sun exposure and a balanced diet should maintain adequate vitamin D levels.\n";
    } else if (user.genetic_insights.vitamin_d_deficiency_risk === "low") {
        recommendations += "You have a low risk of vitamin D deficiency. Continue with a regular diet and sunlight exposure.\n";
    }

    return recommendations;
}

// Example usage
let user = mockData.users[1]; // Bob
let recommendationText = generateRecommendations(user);
console.log(recommendationText);
