// Additional, non-duplicative questions found during the full POH cross-check.
// Loaded after the 11 original topic banks and before the Portuguese translations.
(() => {
  const add = (bank, id, item) => {
    if (!Array.isArray(bank)) return;
    const base = bank[0] || {};
    bank.push({
      ...base,
      id,
      pohVerified: true,
      difficulty: item.difficulty || "MEDIUM",
      question: item.question,
      answers: item.answers,
      correct: item.correct,
      explanation: item.explanation,
      memoryAid: item.memoryAid,
      reference: item.reference,
      sourcePage: item.sourcePage,
      sourceTopic: item.sourceTopic,
      sourceSubtopic: item.sourceSubtopic,
      sourceText: item.sourceText,
      factId: item.factId,
      conceptId: item.conceptId
    });
  };

  add(window.generalQuestions, 2000, {
    question: "What horsepower ratings are listed for takeoff and maximum climb/cruise power?",
    answers: ["1,200 shp for both", "1,200 shp takeoff and 1,000 shp climb/cruise", "1,000 shp for both", "1,200 shp takeoff and 900 shp climb/cruise"],
    correct: 0,
    explanation: "Section 1 lists 1,200 shp for takeoff power and 1,200 shp for maximum climb/cruise power.",
    memoryAid: "TAKEOFF + MAX CLIMB/CRUISE = 1,200 SHP",
    reference: "Section 1 - General",
    sourcePage: "1-5",
    sourceTopic: "Powerplant",
    sourceSubtopic: "Horsepower ratings",
    sourceText: "Takeoff Power 1,200 shp; Maximum Climb/Cruise Power 1,200 shp.",
    factId: "FACT_GENERAL_TAKEOFF_CLIMB_CRUISE_SHP",
    conceptId: "CONCEPT_ENGINE_POWER_RATINGS"
  });

  add(window.limitationsQuestions, 2001, {
    question: "What is the maximum load permitted on the baggage-area coat rail?",
    answers: ["11 lb (5 kg)", "22 lb (10 kg)", "5 lb (2.3 kg)", "15 lb (6.8 kg)"],
    correct: 0,
    explanation: "The placard above the baggage area limits the coat-rail load to 11 lb (5 kg).",
    memoryAid: "COAT RAIL: 11 LB / 5 KG",
    reference: "Section 2 - Limitations",
    sourcePage: "2-53",
    sourceTopic: "Other Limitations",
    sourceSubtopic: "Baggage-area coat rail",
    sourceText: "CARGA MAX NA BARRA DE CASACOS 11 lb (5 kg).",
    factId: "FACT_COAT_RAIL_MAX_LOAD",
    conceptId: "CONCEPT_CABIN_LOAD_LIMITS"
  });

  add(window.emergencyQuestions, 2002, {
    question: "When the Engine Oil Debris caution is displayed and an ODM is installed, what actions does the procedure specify?",
    answers: ["Monitor engine parameters, reduce PCL to minimum safe, land as soon as practical, then have maintenance inspect the engine and reset the chip counter", "Shut down the engine immediately, pull the fuel shutoff, and reset the counter in flight", "Increase PCL to maximum, continue to destination, and replace the oil filter after shutdown", "Feather the propeller, select the emergency fuel supply, and reset the counter before landing"],
    correct: 0,
    explanation: "The Engine Oil Debris procedure calls for monitoring parameters, reducing PCL to the minimum safe setting, landing as soon as practical, and post-landing engine inspection with chip-counter reset by maintenance.",
    memoryAid: "MONITOR — MINIMUM SAFE — LAND — INSPECT/RESET",
    reference: "Section 3 - Emergency Procedures",
    sourcePage: "3-19A",
    sourceTopic: "Engine Emergencies",
    sourceSubtopic: "Engine Oil Debris",
    sourceText: "If ODM is installed: check and monitor engine parameters; reduce PCL to minimum safe; land as soon as practical. After landing, maintenance inspects the engine and resets the chip counter.",
    factId: "FACT_EMERGENCY_ENGINE_OIL_DEBRIS_RESPONSE",
    conceptId: "CONCEPT_ENGINE_OIL_DEBRIS"
  });

  add(window.emergencyQuestions, 2003, {
    question: "In flight, what actions are specified for a hydraulic-system failure after the pump has operated for more than 2 minutes or pressure is below operational limits?",
    answers: ["Pull the HYD CTL circuit breaker and reduce airspeed below 180 KIAS", "Cycle the landing-gear selector and maintain at least 180 KIAS", "Pull the landing-gear circuit breaker and extend the flaps to 40°", "Switch the hydraulic pump off and continue at the current airspeed"],
    correct: 0,
    explanation: "The in-flight hydraulic-failure procedure says to pull HYD CTL and reduce airspeed below 180 KIAS.",
    memoryAid: "HYD CTL PULLED; SPEED BELOW 180 KIAS",
    reference: "Section 3 - Emergency Procedures",
    sourcePage: "3-36",
    sourceTopic: "Landing Gear / Hydraulic System Failure",
    sourceSubtopic: "Hydraulic system failure in flight",
    sourceText: "If the hydraulic pump has operated for more than 2 minutes or system pressure is below operational limits: pull HYD CTL; reduce airspeed below 180 KIAS.",
    factId: "FACT_EMERGENCY_HYD_FAILURE_ACTIONS",
    conceptId: "CONCEPT_HYDRAULIC_EMERGENCY"
  });

  add(window.emergencyQuestions, 2004, {
    question: "After a hydraulic-system failure in flight, when may the landing gear start to extend?",
    answers: ["After 200 minutes (3 hours 20 minutes)", "After 20 minutes", "After 60 minutes", "Only after the emergency extension lever is pulled"],
    correct: 0,
    explanation: "The procedure warns that the landing gear may start to extend after 200 minutes following the specified hydraulic-system failure condition.",
    memoryAid: "HYDRAULIC FAILURE: GEAR MAY EXTEND AFTER 200 MIN",
    reference: "Section 3 - Emergency Procedures",
    sourcePage: "3-36",
    sourceTopic: "Landing Gear / Hydraulic System Failure",
    sourceSubtopic: "Possible gear extension after hydraulic failure",
    sourceText: "After 200 minutes (3 hrs, 20 mins), landing gear may start to extend.",
    factId: "FACT_EMERGENCY_HYD_GEAR_EXTEND_DELAY",
    conceptId: "CONCEPT_HYDRAULIC_EMERGENCY"
  });

  add(window.emergencyQuestions, 2005, {
    question: "Which group contains the factors the POH says to consider when selecting an emergency-descent response?",
    answers: ["Cabin altitude and oxygen duration, electrical endurance, distance to a suitable landing area, IMC/VMC/icing, minimum safe altitude, and fuel reserves", "Only aircraft weight, outside temperature, runway slope, and crosswind", "Only engine torque, propeller RPM, oil pressure, and fuel temperature", "Cabin temperature, passenger count, tire pressure, and flap motor temperature"],
    correct: 0,
    explanation: "The general emergency-descent guidance lists these six factors and says to adapt actions to the situation and priorities.",
    memoryAid: "OXYGEN — ELECTRICAL — LANDING AREA — CONDITIONS — ALTITUDE — FUEL",
    reference: "Section 3 - Emergency Procedures",
    sourcePage: "3-24",
    sourceTopic: "Emergency Descent",
    sourceSubtopic: "Factors to consider",
    sourceText: "Consider cabin altitude and oxygen duration; electrical power endurance; distance to suitable landing area; IMC, VMC, icing; minimum safe altitude; and fuel reserves.",
    factId: "FACT_EMERGENCY_DESCENT_CONSIDERATIONS",
    conceptId: "CONCEPT_EMERGENCY_DESCENT"
  });

  add(window.emergencyQuestions, 2006, {
    question: "What warning applies if the stick shaker is inoperative?",
    answers: ["Approaches to stalls are not warned and natural stalls are not prevented", "The aircraft remains stall protected, but the autopilot must be disconnected", "Only stalls with flaps 0° are prevented", "The shaker will automatically activate at a higher angle of attack"],
    correct: 0,
    explanation: "The POH warns that an inoperative stick shaker does not warn of approaches to stalls and does not prevent natural stalls.",
    memoryAid: "SHAKER INOP = NO STALL APPROACH WARNING OR PREVENTION",
    reference: "Section 3 - Emergency Procedures",
    sourcePage: "3-41",
    sourceTopic: "Inadvertent Pusher/Shaker Operation",
    sourceSubtopic: "Stick shaker inoperative",
    sourceText: "Approaches to stalls are not warned and natural stalls are not prevented with the stick shaker inoperative.",
    factId: "FACT_EMERGENCY_SHAKER_INOP_WARNING",
    conceptId: "CONCEPT_STALL_PROTECTION"
  });

  add(window.aircraftSystemsQuestions, 2007, {
    question: "When is flap-down enable disabled to help prevent an inadvertent flap-down command at high speed?",
    answers: ["When the flap selector handle is at 0°", "Whenever the landing gear is retracted", "Only when flaps are at 15°", "When the aircraft is below 50 KIAS"],
    correct: 0,
    explanation: "The flap system description says flap-down enable is disabled when the selector handle is in the 0° position.",
    memoryAid: "SELECTOR 0° = FLAP-DOWN ENABLE DISABLED",
    reference: "Section 7 - Airplane and Systems Description",
    sourcePage: "7-3-4",
    sourceTopic: "Flight Controls",
    sourceSubtopic: "Flap system interlock",
    sourceText: "To avoid an inadvertent flap down command at high speed, flap down enable is disabled when the flap selector handle is in the 0° position.",
    factId: "FACT_SYS_FLAP_DOWN_ENABLE_ZERO",
    conceptId: "CONCEPT_FLAP_SYSTEM"
  });

  add(window.aircraftSystemsQuestions, 2008, {
    question: "When does the Flight Alerting System issue a NO TAKEOFF warning under the takeoff-configuration monitoring logic?",
    answers: ["When a trim or flap is outside the takeoff range, or the condition lever is not at flight idle, with torque above 20 psi and airspeed below 50 KIAS", "Whenever the flaps are at 0° with the aircraft weight on wheels", "Only when the engine is shut down and a trim is outside the takeoff range", "When torque is below 20 psi and airspeed is above 50 KIAS"],
    correct: 0,
    explanation: "On the ground, the FAS gives the NO TAKEOFF warning for an out-of-range trim/flap or a condition lever not at flight idle when torque exceeds 20 psi and airspeed is below 50 KIAS.",
    memoryAid: "OUT OF TAKEOFF CONFIG + >20 PSI + <50 KIAS = NO TAKEOFF",
    reference: "Section 7 - Airplane and Systems Description",
    sourcePage: "7-3-5",
    sourceTopic: "Flight Controls",
    sourceSubtopic: "Takeoff-configuration warning",
    sourceText: "If trims or flap position are not in takeoff range or the condition lever is not at flight idle, and torque is increased more than 20 psi with airspeed less than 50 KIAS, FAS initiates NO TAKEOFF.",
    factId: "FACT_SYS_NO_TAKEOFF_WARNING_TRIGGER",
    conceptId: "CONCEPT_TAKEOFF_CONFIGURATION_MONITORING"
  });

  add(window.handlingMaintenanceQuestions, 2009, {
    question: "What water-quality limits are recommended for aircraft rinsing?",
    answers: ["pH 6.5–8.5 and chloride concentration below 100 mg/L", "pH 5.0–6.0 and chloride below 500 mg/L", "pH 8.5–10.0 and chloride above 100 mg/L", "Any pH is acceptable if the water is warm"],
    correct: 0,
    explanation: "The rinsing procedure recommends water with a pH from 6.5 to 8.5 and less than 100 mg/L chloride.",
    memoryAid: "RINSE WATER: pH 6.5–8.5; Cl⁻ <100 mg/L",
    reference: "Section 8 - Handling, Servicing and Maintenance",
    sourcePage: "8-32C",
    sourceTopic: "Cleaning and care",
    sourceSubtopic: "Rinse-water quality",
    sourceText: "Recommended water quality: pH value 6.5–8.5; chloride concentration less than 100 mg/L.",
    factId: "FACT_HSM_RINSE_WATER_QUALITY",
    conceptId: "CONCEPT_AIRCRAFT_CLEANING"
  });

  add(window.handlingMaintenanceQuestions, 2010, {
    question: "What flap setting is required when preparing the airplane for the specified water-rinsing procedure?",
    answers: ["Landing position, 40°", "Fully retracted, 0°", "15°", "30°"],
    correct: 0,
    explanation: "The preparation steps for the water-rinsing procedure require the flaps to be set to the landing position (40°).",
    memoryAid: "RINSE PREPARATION: FLAPS 40°",
    reference: "Section 8 - Handling, Servicing and Maintenance",
    sourcePage: "8-32C",
    sourceTopic: "Cleaning and care",
    sourceSubtopic: "Aircraft-rinsing preparation",
    sourceText: "Set the flaps to the landing position (40 degrees) before aircraft rinsing.",
    factId: "FACT_HSM_RINSE_PREP_FLAPS_40",
    conceptId: "CONCEPT_AIRCRAFT_CLEANING"
  });

  add(window.handlingMaintenanceQuestions, 2011, {
    question: "What does the aircraft-rinsing procedure prohibit when covering the static ports?",
    answers: ["Using adhesive tape", "Using the designated static-port covers", "Closing access panels", "Installing the pitot-probe covers"],
    correct: 0,
    explanation: "The caution explicitly says not to use adhesive tape to cover the static ports.",
    memoryAid: "STATIC PORTS: NEVER COVER WITH ADHESIVE TAPE",
    reference: "Section 8 - Handling, Servicing and Maintenance",
    sourcePage: "8-32C",
    sourceTopic: "Cleaning and care",
    sourceSubtopic: "Static-port protection during rinsing",
    sourceText: "Do not use adhesive tape to cover the static ports.",
    factId: "FACT_HSM_NO_TAPE_STATIC_PORTS",
    conceptId: "CONCEPT_AIRCRAFT_CLEANING"
  });

  add(window.handlingMaintenanceQuestions, 2012, {
    question: "How does the POH say to clean fabric surfaces in the cabin?",
    answers: ["Do not use soap solution or water because this can inhibit the fireblock treatment", "Wash with hot soapy water and scrub firmly", "Use acetone, then rinse with water", "Apply fuel-system anti-icing additive and wipe dry"],
    correct: 0,
    explanation: "The caution prohibits soap solution or water on fabric surfaces because it can inhibit the properties of the fireblock treatment.",
    memoryAid: "FABRIC: NO SOAP OR WATER — PRESERVE FIREBLOCK TREATMENT",
    reference: "Section 8 - Handling, Servicing and Maintenance",
    sourcePage: "8-38",
    sourceTopic: "Cleaning and care",
    sourceSubtopic: "Fabric surfaces",
    sourceText: "Do not clean fabric surfaces with a soap solution or water; this can inhibit the properties of the fireblock treatment.",
    factId: "FACT_HSM_FABRIC_FIREBLOCK_CLEANING",
    conceptId: "CONCEPT_CABIN_CLEANING"
  });

  add(window.safetyQuestions, 2013, {
    question: "From which direction must de-icing or anti-icing fluid always be sprayed onto the aircraft?",
    answers: ["From the front of the aircraft", "From the rear of the aircraft", "From either direction, as long as the spray is heated", "Only upward from below the wings"],
    correct: 0,
    explanation: "Section 10 says fluid must be sprayed from the front; spraying from behind can force fluid into aerodynamically quiet areas where it may not drain.",
    memoryAid: "DE-ICING FLUID: SPRAY FROM THE FRONT",
    reference: "Section 10 - Safety and Operational Tips",
    sourcePage: "10-10",
    sourceTopic: "Application of de-icing/anti-icing fluid",
    sourceSubtopic: "Spray direction",
    sourceText: "Fluid must always be sprayed from the front of the aircraft; fluid sprayed from the rear can enter aerodynamically quiet areas where it may not drain.",
    factId: "FACT_SAFETY_DEICE_SPRAY_FROM_FRONT",
    conceptId: "CONCEPT_GROUND_DEICING_PRECAUTIONS"
  });

  add(window.safetyQuestions, 2014, {
    question: "Which group lists areas toward which de-icing/anti-icing fluid must not be directed?",
    answers: ["Static ports, pitot heads, AOA transmitters, cockpit windows, air intakes, brakes, wheels, and engine inlet/exhaust ports", "Only the landing-gear tires and passenger windows", "Only the wing leading edge and horizontal stabilizer", "Cabin seats, floor panels, and baggage nets"],
    correct: 0,
    explanation: "The general fluid-application guidance names these openings, sensors, windows, and components as areas that must not be directly sprayed.",
    memoryAid: "KEEP FLUID OFF SENSORS, WINDOWS, INTAKES, BRAKES, WHEELS, ENGINE PORTS",
    reference: "Section 10 - Safety and Operational Tips",
    sourcePage: "10-10",
    sourceTopic: "Application of de-icing/anti-icing fluid",
    sourceSubtopic: "Areas to protect",
    sourceText: "Do not direct fluids toward static ports, pitot heads, AOA transmitters, cockpit windows, air intakes, brakes, wheels, or engine inlet/exhaust ports.",
    factId: "FACT_SAFETY_DEICE_PROTECTED_AREAS",
    conceptId: "CONCEPT_GROUND_DEICING_PRECAUTIONS"
  });

  add(window.weightAndBalanceQuestions, 2015, {
    question: "What formula does the POH give for calculating longitudinal CG arm when weighing with jacks and load cells?",
    answers: ["((L + R) × B + T × A) / (L + R + T)", "((L + R + T) × A) / (B + T)", "(L × R + T) / (A + B)", "(L + R + T) / (A × B)"],
    correct: 0,
    explanation: "The jacks-and-load-cells procedure gives CG arm = ((L + R) × B + T × A) divided by (L + R + T).",
    memoryAid: "CG ARM = [(L+R)B + TA] / [L+R+T]",
    reference: "Section 6 - Weight and Balance",
    sourcePage: "6-8",
    sourceTopic: "Airplane weighing",
    sourceSubtopic: "CG arm using jacks and load cells",
    sourceText: "C.G. Arm = ((L + R) × B + T × A) / (L + R + T).",
    factId: "FACT_WB_LOAD_CELL_CG_FORMULA",
    conceptId: "CONCEPT_AIRCRAFT_WEIGHING"
  });

  add(window.supplementsQuestions, 2016, {
    question: "Under the Argentina supplement, what requirement applies to the aircraft ELT?",
    answers: ["It must comply with RAAC 91.207", "It must transmit only on 121.5 MHz", "It must be removed before every international flight", "It must be connected to the passenger oxygen system"],
    correct: 0,
    explanation: "Supplement 6 states that the Emergency Locator Transmitter must comply with RAAC 91.207.",
    memoryAid: "ARGENTINA SUPPLEMENT: ELT — RAAC 91.207",
    reference: "Section 9 - Supplements",
    sourcePage: "9-6-10",
    sourceTopic: "Argentina operations",
    sourceSubtopic: "Emergency Locator Transmitter",
    sourceText: "The Emergency Locator Transmitter (ELT) must comply with RAAC 91.207.",
    factId: "FACT_SUPP6_ELT_RAAC_91207",
    conceptId: "CONCEPT_SUPP6_ARGENTINA"
  });

  add(window.supplementsQuestions, 2017, {
    question: "Under the Chile supplement cargo placard, what is the maximum floor loading on the floor panels?",
    answers: ["600 kg/m² (125 lb/ft²)", "1,000 kg/m² (205 lb/ft²)", "400 kg/m² (82 lb/ft²)", "1,500 kg/m² (307 lb/ft²)"],
    correct: 0,
    explanation: "The Chile supplement cargo placard lists 600 kg/m² (125 lb/ft²) for floor panels; the separate seat-rail limit is higher.",
    memoryAid: "CHILE CARGO PLACARD: FLOOR PANELS 600 KG/M²",
    reference: "Section 9 - Supplements",
    sourcePage: "9-13-13",
    sourceTopic: "Chile operations",
    sourceSubtopic: "Cargo floor loading",
    sourceText: "Maximum load on floor panels: 600 kg/m² (125 lb/ft²).",
    factId: "FACT_SUPP13_FLOOR_PANEL_LOADING",
    conceptId: "CONCEPT_SUPP13_CHILE"
  });
})();
