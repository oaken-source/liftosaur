import { IWeight, Weight, IBars, TBarKey, IBarKey } from "./weight";
import { ISet } from "./set";
import * as t from "io-ts";
import { IArrayElement } from "../utils/types";
import { ISettings, Settings } from "./settings";
import { ObjectUtils } from "../utils/object";

export const exerciseTypes = [
  "abWheel",
  "arnoldPress",
  "aroundTheWorld",
  "backExtension",
  "ballSlams",
  "battleRopes",
  "benchDip",
  "benchPress",
  "benchPressCloseGrip",
  "benchPressWideGrip",
  "bentOverOneArmRow",
  "bentOverRow",
  "bicepCurl",
  "bicycleCrunch",
  "boxJump",
  "boxSquat",
  "bulgarianSplitSquat",
  "burpee",
  "cableCrossover",
  "cableCrunch",
  "cableKickback",
  "cablePullThrough",
  "cableTwist",
  "calfPressOnLegPress",
  "calfPressOnSeatedLegPress",
  "chestDip",
  "chestFly",
  "chestPress",
  "chinUp",
  "clean",
  "cleanandJerk",
  "concentrationCurl",
  "crossBodyCrunch",
  "crunch",
  "cycling",
  "deadlift",
  "deadliftHighPull",
  "declineBenchPress",
  "declineCrunch",
  "deficitDeadlift",
  "ellipticalMachine",
  "facePull",
  "flatKneeRaise",
  "flatLegRaise",
  "frontRaise",
  "frontSquat",
  "gobletSquat",
  "goodMorning",
  "hackSquat",
  "hammerCurl",
  "handstandPushUp",
  "hangClean",
  "hangSnatch",
  "hangingLegRaise",
  "highKneeSkips",
  "hipAbductor",
  "hipThrust",
  "inclineBenchPress",
  "inclineChestFly",
  "inclineChestPress",
  "inclineCurl",
  "inclineRow",
  "invertedRow",
  "isoLateralChestPress",
  "isoLateralRow",
  "jackknifeSitUp",
  "jumpRope",
  "jumpSquat",
  "jumpingJack",
  "kettlebellSwing",
  "kettlebellTurkishGetUp",
  "kippingPullUp",
  "kneeRaise",
  "kneelingPulldown",
  "kneestoElbows",
  "latPulldown",
  "lateralBoxJump",
  "lateralRaise",
  "legExtension",
  "legPress",
  "lunge",
  "lyingLegCurl",
  "mountainClimber",
  "muscleUp",
  "obliqueCrunch",
  "overheadPress",
  "overheadSquat",
  "pecDeck",
  "pendlayRow",
  "pistolSquat",
  "plank",
  "powerClean",
  "powerSnatch",
  "preacherCurl",
  "pressUnder",
  "pullUp",
  "pullover",
  "pushPress",
  "pushUp",
  "reverseCrunch",
  "reverseCurl",
  "reverseFly",
  "reverseGripConcentrationCurl",
  "reversePlank",
  "romanianDeadlift",
  "rowing",
  "russianTwist",
  "seatedCalfRaise",
  "seatedLegCurl",
  "seatedLegPress",
  "seatedOverheadPress",
  "seatedPalmsUpWristCurl",
  "seatedRow",
  "seatedWideGripRow",
  "shoulderPress",
  "shrug",
  "sideBend",
  "sidePlank",
  "singleLegBridge",
  "singleLegDeadlift",
  "sitUp",
  "skullcrusher",
  "snatch",
  "snatchPull",
  "splitJerk",
  "squat",
  "squatRow",
  "standingCalfRaise",
  "stepUp",
  "stiffLegDeadlift",
  "straightLegDeadlift",
  "sumoDeadlift",
  "sumoDeadliftHighPull",
  "superman",
  "tBarRow",
  "thruster",
  "toesToBar",
  "torsoRotation",
  "trapBarDeadlift",
  "tricepsDip",
  "tricepsExtension",
  "tricepsPushdown",
  "uprightRow",
  "vUp",
  "widePullUp",
  "wristRoller",
  "zercherSquat",
] as const;

export const exercises: Record<IExerciseId, IExercise> = {
  abWheel: {
    id: "abWheel",
    name: "Ab Wheel",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  arnoldPress: {
    id: "arnoldPress",
    name: "Arnold Press",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  aroundTheWorld: {
    id: "aroundTheWorld",
    name: "Arount The World",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  backExtension: {
    id: "backExtension",
    name: "Back Extension",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  ballSlams: {
    id: "ballSlams",
    name: "Ball Slams",
    warmupSets: warmupEmpty,
    defaultBar: undefined,
  },
  battleRopes: {
    id: "battleRopes",
    name: "Battle Ropes",
    warmupSets: warmupEmpty,
    defaultBar: undefined,
  },
  benchDip: {
    id: "benchDip",
    name: "Bench Dip",
    warmupSets: warmupEmpty,
    defaultBar: undefined,
  },
  benchPress: {
    id: "benchPress",
    name: "Bench Press",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  benchPressCloseGrip: {
    id: "benchPressCloseGrip",
    name: "Bench Press Close Grip",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  benchPressWideGrip: {
    id: "benchPressWideGrip",
    name: "Bench Press Wide Grip",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  bentOverOneArmRow: {
    id: "bentOverOneArmRow",
    name: "Bent Over One Arm Row",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  bentOverRow: {
    id: "bentOverRow",
    name: "Bent Over Row",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  bicepCurl: {
    id: "bicepCurl",
    name: "Bicep Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  bicycleCrunch: {
    id: "bicycleCrunch",
    name: "Bicycle Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  boxJump: {
    id: "boxJump",
    name: "Box Jump",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  boxSquat: {
    id: "boxSquat",
    name: "Box Squat",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  bulgarianSplitSquat: {
    id: "bulgarianSplitSquat",
    name: "Bulgarian Split Squat",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  burpee: {
    id: "burpee",
    name: "Burpee",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  cableCrossover: {
    id: "cableCrossover",
    name: "Cable Crossover",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  cableCrunch: {
    id: "cableCrunch",
    name: "Cable Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  cableKickback: {
    id: "cableKickback",
    name: "Cable Kickback",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  cablePullThrough: {
    id: "cablePullThrough",
    name: "Cable Pull Through",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  cableTwist: {
    id: "cableTwist",
    name: "Cable Twist",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  calfPressOnLegPress: {
    id: "calfPressOnLegPress",
    name: "Calf Press on Leg Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  calfPressOnSeatedLegPress: {
    id: "calfPressOnSeatedLegPress",
    name: "Calf Press on Seated Leg Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  chestDip: {
    id: "chestDip",
    name: "Chest Dip",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  chestFly: {
    id: "chestFly",
    name: "Chest Fly",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  chestPress: {
    id: "chestPress",
    name: "Chest Press",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  chinUp: {
    id: "chinUp",
    name: "Chin Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  clean: {
    id: "clean",
    name: "Clean",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  cleanandJerk: {
    id: "cleanandJerk",
    name: "Clean and Jerk",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  concentrationCurl: {
    id: "concentrationCurl",
    name: "Concentration Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  crossBodyCrunch: {
    id: "crossBodyCrunch",
    name: "Cross Body Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  crunch: {
    id: "crunch",
    name: "Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  cycling: {
    id: "cycling",
    name: "Cycling",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  deadlift: {
    id: "deadlift",
    name: "Deadlift",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  deadliftHighPull: {
    id: "deadliftHighPull",
    name: "Deadlift High Pull",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  declineBenchPress: {
    id: "declineBenchPress",
    name: "Decline Bench Press",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  declineCrunch: {
    id: "declineCrunch",
    name: "Decline Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  deficitDeadlift: {
    id: "deficitDeadlift",
    name: "Deficit Deadlift",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  ellipticalMachine: {
    id: "ellipticalMachine",
    name: "Elliptical Machine",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  facePull: {
    id: "facePull",
    name: "Face Pull",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  flatKneeRaise: {
    id: "flatKneeRaise",
    name: "Flat Knee Raise",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  flatLegRaise: {
    id: "flatLegRaise",
    name: "Flat Leg Raise",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  frontRaise: {
    id: "frontRaise",
    name: "Front Raise",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  frontSquat: {
    id: "frontSquat",
    name: "Front Squat",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  gobletSquat: {
    id: "gobletSquat",
    name: "Goblet Squat",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  goodMorning: {
    id: "goodMorning",
    name: "Good Morning",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  hackSquat: {
    id: "hackSquat",
    name: "Hack Squat",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  hammerCurl: {
    id: "hammerCurl",
    name: "Hammer Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  handstandPushUp: {
    id: "handstandPushUp",
    name: "Handstand Push Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  hangClean: {
    id: "hangClean",
    name: "Hang Clean",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  hangSnatch: {
    id: "hangSnatch",
    name: "Hang Snatch",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  hangingLegRaise: {
    id: "hangingLegRaise",
    name: "Hanging Leg Raise",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  highKneeSkips: {
    id: "highKneeSkips",
    name: "High Knee Skips",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  hipAbductor: {
    id: "hipAbductor",
    name: "Hip Abductor",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  hipThrust: {
    id: "hipThrust",
    name: "Hip Thrust",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  inclineBenchPress: {
    id: "inclineBenchPress",
    name: "Incline Bench Press",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  inclineChestFly: {
    id: "inclineChestFly",
    name: "Incline Chest Fly",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  inclineChestPress: {
    id: "inclineChestPress",
    name: "Incline Chest Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  inclineCurl: {
    id: "inclineCurl",
    name: "Incline Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  inclineRow: {
    id: "inclineRow",
    name: "Incline Row",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  invertedRow: {
    id: "invertedRow",
    name: "Inverted Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  isoLateralChestPress: {
    id: "isoLateralChestPress",
    name: "Iso-Lateral Chest Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  isoLateralRow: {
    id: "isoLateralRow",
    name: "Iso-Lateral Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  jackknifeSitUp: {
    id: "jackknifeSitUp",
    name: "Jackknife Sit Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  jumpRope: {
    id: "jumpRope",
    name: "Jump Rope",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  jumpSquat: {
    id: "jumpSquat",
    name: "Jump Squat",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  jumpingJack: {
    id: "jumpingJack",
    name: "Jumping Jack",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  kettlebellSwing: {
    id: "kettlebellSwing",
    name: "Kettlebell Swing",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  kettlebellTurkishGetUp: {
    id: "kettlebellTurkishGetUp",
    name: "Kettlebell Turkish Get Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  kippingPullUp: {
    id: "kippingPullUp",
    name: "Kipping Pull Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  kneeRaise: {
    id: "kneeRaise",
    name: "Knee Raise",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  kneelingPulldown: {
    id: "kneelingPulldown",
    name: "Kneeling Pulldown",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  kneestoElbows: {
    id: "kneestoElbows",
    name: "Knees to Elbows",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  latPulldown: {
    id: "latPulldown",
    name: "Lat Pulldown",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  lateralBoxJump: {
    id: "lateralBoxJump",
    name: "Lateral Box Jump",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  lateralRaise: {
    id: "lateralRaise",
    name: "Lateral Raise",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  legExtension: {
    id: "legExtension",
    name: "Leg Extension",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  legPress: {
    id: "legPress",
    name: "Leg Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  lunge: {
    id: "lunge",
    name: "Lunge",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  lyingLegCurl: {
    id: "lyingLegCurl",
    name: "Lying Leg Curl",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  mountainClimber: {
    id: "mountainClimber",
    name: "Mountain Climber",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  muscleUp: {
    id: "muscleUp",
    name: "Muscle Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  obliqueCrunch: {
    id: "obliqueCrunch",
    name: "Oblique Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  overheadPress: {
    id: "overheadPress",
    name: "Overhead Press",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  overheadSquat: {
    id: "overheadSquat",
    name: "Overhead Squat",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  pecDeck: {
    id: "pecDeck",
    name: "Pec Deck",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  pendlayRow: {
    id: "pendlayRow",
    name: "Pendlay Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  pistolSquat: {
    id: "pistolSquat",
    name: "Pistol Squat",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  plank: {
    id: "plank",
    name: "Plank",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  powerClean: {
    id: "powerClean",
    name: "Power Clean",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  powerSnatch: {
    id: "powerSnatch",
    name: "Power Snatch",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  preacherCurl: {
    id: "preacherCurl",
    name: "Preacher Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  pressUnder: {
    id: "pressUnder",
    name: "Press Under",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  pullUp: {
    id: "pullUp",
    name: "Pull Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  pullover: {
    id: "pullover",
    name: "Pullover",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  pushPress: {
    id: "pushPress",
    name: "Push Press",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  pushUp: {
    id: "pushUp",
    name: "Push Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  reverseCrunch: {
    id: "reverseCrunch",
    name: "Reverse Crunch",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  reverseCurl: {
    id: "reverseCurl",
    name: "Reverse Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  reverseFly: {
    id: "reverseFly",
    name: "Reverse Fly",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  reverseGripConcentrationCurl: {
    id: "reverseGripConcentrationCurl",
    name: "Reverse Grip Concentration Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  reversePlank: {
    id: "reversePlank",
    name: "Reverse Plank",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  romanianDeadlift: {
    id: "romanianDeadlift",
    name: "Romanian Deadlift",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  rowing: {
    id: "rowing",
    name: "Rowing",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  russianTwist: {
    id: "russianTwist",
    name: "Russian Twist",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  seatedCalfRaise: {
    id: "seatedCalfRaise",
    name: "Seated Calf Raise",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  seatedLegCurl: {
    id: "seatedLegCurl",
    name: "Seated Leg Curl",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  seatedLegPress: {
    id: "seatedLegPress",
    name: "Seated Leg Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  seatedOverheadPress: {
    id: "seatedOverheadPress",
    name: "Seated Overhead Press",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  seatedPalmsUpWristCurl: {
    id: "seatedPalmsUpWristCurl",
    name: "Seated Palms Up Wrist Curl",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  seatedRow: {
    id: "seatedRow",
    name: "Seated Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  seatedWideGripRow: {
    id: "seatedWideGripRow",
    name: "Seated Wide Grip Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  shoulderPress: {
    id: "shoulderPress",
    name: "Shoulder Press",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  shrug: {
    id: "shrug",
    name: "Shrug",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  sideBend: {
    id: "sideBend",
    name: "Side Bend",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  sidePlank: {
    id: "sidePlank",
    name: "Side Plank",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  singleLegBridge: {
    id: "singleLegBridge",
    name: "Single Leg Bridge",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  singleLegDeadlift: {
    id: "singleLegDeadlift",
    name: "Single Leg Deadlift",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  sitUp: {
    id: "sitUp",
    name: "Sit Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  skullcrusher: {
    id: "skullcrusher",
    name: "Skullcrusher",
    warmupSets: warmup10,
    defaultBar: "ezbar",
  },
  snatch: {
    id: "snatch",
    name: "Snatch",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  snatchPull: {
    id: "snatchPull",
    name: "Snatch Pull",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  splitJerk: {
    id: "splitJerk",
    name: "Split Jerk",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  squat: {
    id: "squat",
    name: "Squat",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  squatRow: {
    id: "squatRow",
    name: "Squat Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  standingCalfRaise: {
    id: "standingCalfRaise",
    name: "Standing Calf Raise",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  stepUp: {
    id: "stepUp",
    name: "Step up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  stiffLegDeadlift: {
    id: "stiffLegDeadlift",
    name: "Stiff Leg Deadlift",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  straightLegDeadlift: {
    id: "straightLegDeadlift",
    name: "Straight Leg Deadlift",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  sumoDeadlift: {
    id: "sumoDeadlift",
    name: "Sumo Deadlift",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  sumoDeadliftHighPull: {
    id: "sumoDeadliftHighPull",
    name: "Sumo Deadlift High Pull",
    warmupSets: warmup95,
    defaultBar: "barbell",
  },
  superman: {
    id: "superman",
    name: "Superman",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  tBarRow: {
    id: "tBarRow",
    name: "T Bar Row",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  thruster: {
    id: "thruster",
    name: "Thruster",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
  toesToBar: {
    id: "toesToBar",
    name: "Toes To Bar",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  torsoRotation: {
    id: "torsoRotation",
    name: "Torso Rotation",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  trapBarDeadlift: {
    id: "trapBarDeadlift",
    name: "Trap Bar Deadlift",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  tricepsDip: {
    id: "tricepsDip",
    name: "Triceps Dip",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  tricepsExtension: {
    id: "tricepsExtension",
    name: "Triceps Extension",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  tricepsPushdown: {
    id: "tricepsPushdown",
    name: "Triceps Pushdown",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  uprightRow: {
    id: "uprightRow",
    name: "Upright Row",
    warmupSets: warmup10,
    defaultBar: "dumbbell",
  },
  vUp: {
    id: "vUp",
    name: "V Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  widePullUp: {
    id: "widePullUp",
    name: "Wide Pull Up",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  wristRoller: {
    id: "wristRoller",
    name: "Wrist Roller",
    warmupSets: warmup10,
    defaultBar: undefined,
  },
  zercherSquat: {
    id: "zercherSquat",
    name: "Zercher Squat",
    warmupSets: warmup45,
    defaultBar: "barbell",
  },
};

type IBodyPart = "Back" | "Calves" | "Chest" | "Forearms" | "Hips" | "Shoulders" | "Thighs" | "Upper Arms" | "Waist";

interface IMetaExercises {
  bodyParts: IBodyPart[];
  targetMuscles: IMuscle[];
  synergistMuscles: IMuscle[];
}

type IEquipment =
  | "barbell"
  | "cable"
  | "dumbbell"
  | "smith"
  | "band"
  | "kettlebell"
  | "bodyweight"
  | "leverageMachine"
  | "medicineball"
  | "ezbar"
  | "trapbar";

type IMuscle =
  | "Adductor Brevis"
  | "Adductor Longus"
  | "Adductor Magnus"
  | "Biceps Brachii"
  | "Brachialis"
  | "Brachioradialis"
  | "Deltoid Anterior"
  | "Deltoid Lateral"
  | "Deltoid Posterior"
  | "Erector Spinae"
  | "Gastrocnemius"
  | "Gluteus Maximus"
  | "Gluteus Medius"
  | "Hamstrings"
  | "Iliopsoas"
  | "Infraspinatus"
  | "Latissimus Dorsi"
  | "Levator Scapulae"
  | "Obliques"
  | "Pectineous"
  | "Pectoralis Major Clavicular Head"
  | "Pectoralis Major Sternal Head"
  | "Quadriceps"
  | "Rectus Abdominis"
  | "Sartorius"
  | "Serratus Ante"
  | "Serratus Anterior"
  | "Soleus"
  | "Splenius"
  | "Sternocleidomastoid"
  | "Tensor Fasciae Latae"
  | "Teres Major"
  | "Teres Minor"
  | "Tibialis Anterior"
  | "Trapezius Lower Fibers"
  | "Trapezius Middle Fibers"
  | "Trapezius Upper Fibers"
  | "Triceps Brachii"
  | "Wrist Extensors"
  | "Wrist Flexors";

const metadata: Record<IExerciseId, Partial<Record<IEquipment, IMetaExercises>>> = {
  abWheel: {
    bodyweight: {
      targetMuscles: ["Iliopsoas"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Deltoid Posterior",
        "Latissimus Dorsi",
        "Pectineous",
        "Pectoralis Major Sternal Head",
        "Sartorius",
        "Teres Major",
      ],
      bodyParts: ["Back"],
    },
  },
  arnoldPress: {
    dumbbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    kettlebell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
  },
  aroundTheWorld: {
    dumbbell: {
      targetMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Lateral", "Deltoid Posterior", "Latissimus Dorsi", "Serratus Anterior"],
      bodyParts: ["Chest", "Shoulders"],
    },
  },
  backExtension: {
    bodyweight: {
      targetMuscles: ["Erector Spinae"],
      synergistMuscles: ["Gluteus Maximus", "Hamstrings"],
      bodyParts: ["Hips"],
    },
    leverageMachine: {
      targetMuscles: ["Erector Spinae"],
      synergistMuscles: [],
      bodyParts: ["Waist"],
    },
  },
  ballSlams: {
    medicineball: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Rectus Abdominis"],
      bodyParts: ["Back"],
    },
  },
  battleRopes: {
    bodyweight: {
      targetMuscles: ["Deltoid Posterior"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Lateral",
        "Infraspinatus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  benchDip: {
    bodyweight: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [
        "Deltoid Anterior",
        "Latissimus Dorsi",
        "Levator Scapulae",
        "Pectoralis Major Clavicular Head",
        "Pectoralis Major Sternal Head",
      ],
      bodyParts: ["Upper Arms"],
    },
  },
  benchPress: {
    barbell: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    cable: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    dumbbell: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    smith: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    band: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    kettlebell: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  benchPressCloseGrip: {
    barbell: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      bodyParts: ["Upper Arms"],
    },
    ezbar: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      bodyParts: ["Upper Arms"],
    },
    smith: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      bodyParts: ["Upper Arms"],
    },
  },
  benchPressWideGrip: {
    barbell: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    smith: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  bentOverOneArmRow: {
    dumbbell: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
  },
  bentOverRow: {
    barbell: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Middle Fibers",
        "Trapezius Upper Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior"],
      bodyParts: ["Back"],
    },
    cable: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
    dumbbell: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
    band: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
    leverageMachine: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
    smith: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
  },
  bicepCurl: {
    barbell: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    dumbbell: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    band: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    leverageMachine: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Biceps Brachii"],
      bodyParts: ["Upper Arms"],
    },
    cable: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    ezbar: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
  },
  bicycleCrunch: {
    bodyweight: {
      targetMuscles: ["Obliques", "Rectus Abdominis"],
      synergistMuscles: ["Gluteus Maximus", "Iliopsoas", "Quadriceps"],
      bodyParts: ["Waist"],
    },
  },
  boxJump: {},
  boxSquat: {
    barbell: {
      targetMuscles: ["Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
  },
  bulgarianSplitSquat: {
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips", "Thighs"],
    },
  },
  burpee: {},
  cableCrossover: {
    cable: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior"],
      bodyParts: ["Chest"],
    },
  },
  cableCrunch: {
    cable: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
  },
  cableKickback: {
    cable: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
  },
  cablePullThrough: {
    cable: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Erector Spinae", "Hamstrings"],
      bodyParts: ["Hips"],
    },
  },
  cableTwist: {
    barbell: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Iliopsoas"],
      bodyParts: ["Waist"],
    },
    bodyweight: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Rectus Abdominis"],
      bodyParts: ["Waist"],
    },
    cable: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Iliopsoas", "Tensor Fasciae Latae"],
      bodyParts: ["Waist"],
    },
    leverageMachine: {
      targetMuscles: ["Obliques"],
      synergistMuscles: [],
      bodyParts: ["Waist"],
    },
    band: {
      targetMuscles: ["Obliques"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Adductor Magnus",
        "Gluteus Medius",
        "Iliopsoas",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Waist"],
    },
  },
  calfPressOnLegPress: {
    leverageMachine: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
  },
  calfPressOnSeatedLegPress: {
    leverageMachine: {
      targetMuscles: ["Gastrocnemius", "Quadriceps"],
      synergistMuscles: ["Gluteus Maximus", "Hamstrings", "Soleus"],
      bodyParts: ["Calves"],
    },
  },
  chestDip: {
    bodyweight: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: [
        "Deltoid Anterior",
        "Latissimus Dorsi",
        "Levator Scapulae",
        "Pectoralis Major Clavicular Head",
        "Triceps Brachii",
      ],
      bodyParts: ["Chest"],
    },
  },
  chestFly: {
    barbell: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Biceps Brachii", "Deltoid Anterior", "Pectoralis Major Clavicular Head"],
      bodyParts: ["Chest"],
    },
    cable: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Biceps Brachii", "Deltoid Anterior"],
      bodyParts: ["Chest"],
    },
    dumbbell: {
      targetMuscles: ["Pectoralis Major Clavicular Head", "Pectoralis Major Sternal Head"],
      synergistMuscles: ["Biceps Brachii", "Deltoid Anterior"],
      bodyParts: ["Chest"],
    },
    leverageMachine: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Biceps Brachii", "Pectoralis Major Clavicular Head", "Serratus Anterior"],
      bodyParts: ["Chest"],
    },
  },
  chestPress: {
    leverageMachine: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Chest"],
    },
    band: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Biceps Brachii", "Deltoid Lateral", "Pectoralis Major Clavicular Head"],
      bodyParts: ["Chest"],
    },
  },
  chinUp: {
    leverageMachine: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Infraspinatus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
    bodyweight: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Pectoralis Major Sternal Head",
        "Teres Major",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
  },
  clean: {},
  cleanandJerk: {},
  concentrationCurl: {
    barbell: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Biceps Brachii", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    dumbbell: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Biceps Brachii", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    band: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Biceps Brachii", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    cable: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
  },
  crossBodyCrunch: {
    bodyweight: {
      targetMuscles: ["Obliques", "Rectus Abdominis"],
      synergistMuscles: ["Gluteus Maximus", "Quadriceps"],
      bodyParts: ["Waist"],
    },
  },
  crunch: {
    cable: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
    bodyweight: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
    leverageMachine: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
  },
  cycling: {},
  deadlift: {
    barbell: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Erector Spinae", "Hamstrings", "Quadriceps", "Soleus"],
      bodyParts: ["Hips"],
    },
    cable: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Back"],
    },
    leverageMachine: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    smith: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Hamstrings", "Quadriceps", "Soleus"],
      bodyParts: ["Hips"],
    },
    band: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Quadriceps", "Soleus"],
      bodyParts: ["Hips"],
    },
    kettlebell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Gastrocnemius", "Hamstrings", "Soleus"],
      bodyParts: ["Hips", "Thighs"],
    },
    bodyweight: {
      targetMuscles: ["Deltoid Anterior", "Erector Spinae", "Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Hamstrings",
        "Pectoralis Major Clavicular Head",
      ],
      bodyParts: ["Hips", "Shoulders", "Thighs"],
    },
  },
  deadliftHighPull: {
    barbell: {
      targetMuscles: ["Deltoid Lateral", "Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [
        "Adductor Magnus",
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Gastrocnemius",
        "Infraspinatus",
        "Soleus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  declineBenchPress: {
    dumbbell: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    smith: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  declineCrunch: {},
  deficitDeadlift: {},
  ellipticalMachine: {
    leverageMachine: {
      targetMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Deltoid Lateral",
        "Deltoid Posterior",
        "Gluteus Maximus",
        "Hamstrings",
        "Latissimus Dorsi",
        "Levator Scapulae",
        "Pectoralis Major Clavicular Head",
        "Pectoralis Major Sternal Head",
        "Quadriceps",
        "Serratus Ante",
      ],
      synergistMuscles: [],
      bodyParts: [],
    },
  },
  facePull: {
    band: {
      targetMuscles: ["Deltoid Posterior"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Lateral",
        "Infraspinatus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  flatKneeRaise: {
    bodyweight: {
      targetMuscles: ["Iliopsoas"],
      synergistMuscles: ["Adductor Brevis", "Adductor Longus", "Pectineous", "Sartorius"],
      bodyParts: ["Hips"],
    },
  },
  flatLegRaise: {
    bodyweight: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Adductor Magnus",
        "Obliques",
        "Pectineous",
        "Quadriceps",
        "Sartorius",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Hips", "Waist"],
    },
  },
  frontRaise: {
    barbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    cable: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    dumbbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    bodyweight: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    band: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
  },
  frontSquat: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    kettlebell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips", "Thighs"],
    },
    cable: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    smith: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
  },
  gobletSquat: {
    kettlebell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus", "Tensor Fasciae Latae"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Gluteus Medius", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus", "Tensor Fasciae Latae"],
      bodyParts: ["Hips", "Thighs"],
    },
  },
  goodMorning: {
    barbell: {
      targetMuscles: ["Hamstrings"],
      synergistMuscles: ["Adductor Magnus", "Gluteus Maximus"],
      bodyParts: ["Thighs"],
    },
    smith: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Hips"],
    },
    leverageMachine: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: [],
      bodyParts: ["Hips"],
    },
  },
  hackSquat: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    smith: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
  },
  hammerCurl: {
    cable: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Forearms"],
    },
    dumbbell: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Upper Arms"],
    },
    band: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Forearms"],
    },
  },
  handstandPushUp: {
    bodyweight: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [
        "Deltoid Anterior",
        "Deltoid Lateral",
        "Pectoralis Major Clavicular Head",
        "Pectoralis Major Sternal Head",
        "Serratus Anterior",
        "Teres Major",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  hangClean: {
    kettlebell: {
      targetMuscles: ["Biceps Brachii", "Brachialis", "Brachioradialis"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head"],
      bodyParts: ["Forearms"],
    },
  },
  hangSnatch: {},
  hangingLegRaise: {
    bodyweight: {
      targetMuscles: ["Iliopsoas"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Pectineous",
        "Serratus Anterior",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Hips"],
    },
    cable: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: ["Obliques", "Quadriceps", "Sartorius", "Tensor Fasciae Latae"],
      bodyParts: ["Waist"],
    },
  },
  highKneeSkips: {},
  hipAbductor: {
    leverageMachine: {
      targetMuscles: ["Gluteus Maximus", "Gluteus Medius"],
      synergistMuscles: ["Tensor Fasciae Latae"],
      bodyParts: ["Hips"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Medius", "Tensor Fasciae Latae"],
      synergistMuscles: [],
      bodyParts: ["Hips"],
    },
    cable: {
      targetMuscles: ["Gluteus Medius", "Tensor Fasciae Latae"],
      synergistMuscles: [],
      bodyParts: ["Hips"],
    },
    band: {
      targetMuscles: ["Gluteus Medius", "Tensor Fasciae Latae"],
      synergistMuscles: [],
      bodyParts: ["Hips"],
    },
  },
  hipThrust: {
    barbell: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Hamstrings", "Quadriceps"],
      bodyParts: ["Hips"],
    },
    leverageMachine: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Hamstrings", "Quadriceps"],
      bodyParts: ["Hips"],
    },
    band: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Hips"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Hamstrings", "Quadriceps"],
      bodyParts: ["Hips"],
    },
  },
  inclineBenchPress: {
    barbell: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    cable: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    dumbbell: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    smith: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  inclineChestFly: {
    cable: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Biceps Brachii", "Deltoid Anterior"],
      bodyParts: ["Chest"],
    },
    dumbbell: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Biceps Brachii", "Deltoid Anterior"],
      bodyParts: ["Chest"],
    },
  },
  inclineChestPress: {
    leverageMachine: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    band: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    dumbbell: {
      targetMuscles: ["Pectoralis Major Clavicular Head"],
      synergistMuscles: ["Deltoid Anterior", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  inclineCurl: {
    dumbbell: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
  },
  inclineRow: {
    barbell: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Minor",
        "Tibialis Anterior",
        "Trapezius Middle Fibers",
        "Trapezius Upper Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
    dumbbell: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
  },
  invertedRow: {
    bodyweight: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
  },
  isoLateralChestPress: {},
  isoLateralRow: {},
  jackknifeSitUp: {
    bodyweight: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Obliques",
        "Pectineous",
        "Quadriceps",
        "Sartorius",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Waist"],
    },
  },
  jumpRope: {},
  jumpSquat: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Gastrocnemius", "Soleus"],
      bodyParts: ["Thighs"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
  },
  jumpingJack: {},
  kettlebellSwing: {
    dumbbell: {
      targetMuscles: ["Deltoid Anterior", "Gluteus Maximus", "Hamstrings"],
      synergistMuscles: [
        "Adductor Magnus",
        "Deltoid Lateral",
        "Pectoralis Major Clavicular Head",
        "Quadriceps",
        "Serratus Anterior",
        "Soleus",
      ],
      bodyParts: ["Hips", "Shoulders", "Thighs"],
    },
    kettlebell: {
      targetMuscles: ["Deltoid Anterior", "Gluteus Maximus"],
      synergistMuscles: [
        "Adductor Magnus",
        "Hamstrings",
        "Pectoralis Major Clavicular Head",
        "Serratus Anterior",
        "Soleus",
      ],
      bodyParts: ["Hips", "Shoulders"],
    },
  },
  kettlebellTurkishGetUp: {},
  kippingPullUp: {},
  kneeRaise: {},
  kneelingPulldown: {
    band: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Infraspinatus",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
  },
  kneestoElbows: {
    bodyweight: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: ["Obliques", "Quadriceps", "Sartorius"],
      bodyParts: ["Waist"],
    },
  },
  latPulldown: {
    cable: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Obliques",
        "Pectoralis Major Sternal Head",
        "Teres Major",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
  },
  lateralBoxJump: {},
  lateralRaise: {
    cable: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: ["Deltoid Anterior", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    dumbbell: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: ["Deltoid Anterior", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    leverageMachine: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: ["Deltoid Anterior", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    band: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: ["Deltoid Anterior", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
    kettlebell: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: ["Deltoid Anterior", "Serratus Anterior"],
      bodyParts: ["Shoulders"],
    },
  },
  legExtension: {
    leverageMachine: {
      targetMuscles: ["Quadriceps"],
      synergistMuscles: [],
      bodyParts: ["Thighs"],
    },
    band: {
      targetMuscles: ["Quadriceps"],
      synergistMuscles: ["Tensor Fasciae Latae"],
      bodyParts: ["Thighs"],
    },
  },
  legPress: {
    smith: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    leverageMachine: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips", "Thighs"],
    },
  },
  lunge: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    cable: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [],
      bodyParts: ["Thighs"],
    },
  },
  lyingLegCurl: {
    leverageMachine: {
      targetMuscles: ["Hamstrings"],
      synergistMuscles: ["Gastrocnemius", "Soleus"],
      bodyParts: ["Thighs"],
    },
    band: {
      targetMuscles: ["Hamstrings"],
      synergistMuscles: ["Gastrocnemius", "Soleus"],
      bodyParts: ["Thighs"],
    },
  },
  mountainClimber: {},
  muscleUp: {
    bodyweight: {
      targetMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Infraspinatus",
        "Latissimus Dorsi",
        "Pectoralis Major Sternal Head",
        "Teres Major",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
        "Triceps Brachii",
      ],
      synergistMuscles: [],
      bodyParts: ["Back"],
    },
  },
  obliqueCrunch: {
    bodyweight: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Rectus Abdominis"],
      bodyParts: ["Waist"],
    },
  },
  overheadPress: {
    barbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    dumbbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    ezbar: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
  },
  overheadSquat: {
    barbell: {
      targetMuscles: ["Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Gluteus Maximus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips", "Thighs"],
    },
  },
  pecDeck: {
    leverageMachine: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Chest"],
    },
  },
  pendlayRow: {
    barbell: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior"],
      bodyParts: ["Back"],
    },
  },
  pistolSquat: {
    kettlebell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    leverageMachine: {
      targetMuscles: ["Splenius"],
      synergistMuscles: ["Levator Scapulae", "Sternocleidomastoid"],
      bodyParts: ["Thighs"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
  },
  plank: {
    bodyweight: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: [
        "Deltoid Anterior",
        "Gluteus Maximus",
        "Gluteus Medius",
        "Obliques",
        "Sartorius",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Waist"],
    },
  },
  powerClean: {},
  powerSnatch: {},
  preacherCurl: {
    barbell: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Biceps Brachii", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    dumbbell: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    ezbar: {
      targetMuscles: ["Biceps Brachii"],
      synergistMuscles: ["Brachialis", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
    leverageMachine: {
      targetMuscles: ["Brachialis"],
      synergistMuscles: ["Biceps Brachii", "Brachioradialis"],
      bodyParts: ["Upper Arms"],
    },
  },
  pressUnder: {},
  pullUp: {
    leverageMachine: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Infraspinatus",
        "Teres Major",
        "Teres Minor",
        "Trapezius Middle Fibers",
        "Trapezius Upper Fibers",
      ],
      bodyParts: ["Back"],
    },
    bodyweight: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Infraspinatus",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
    band: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Posterior",
        "Infraspinatus",
        "Levator Scapulae",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
  },
  pullover: {
    barbell: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Pectoralis Major Clavicular Head",
        "Pectoralis Major Sternal Head",
        "Teres Major",
        "Triceps Brachii",
      ],
      bodyParts: ["Back"],
    },
    dumbbell: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Posterior", "Latissimus Dorsi", "Teres Major", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  pushPress: {
    bodyweight: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    kettlebell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Deltoid Lateral",
        "Pectoralis Major Clavicular Head",
        "Serratus Anterior",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  pushUp: {
    bodyweight: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
    band: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Chest"],
    },
  },
  reverseCrunch: {
    bodyweight: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
    cable: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
  },
  reverseCurl: {
    barbell: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Forearms"],
    },
    cable: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Forearms"],
    },
    dumbbell: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Forearms"],
    },
    band: {
      targetMuscles: ["Brachioradialis"],
      synergistMuscles: ["Biceps Brachii", "Brachialis"],
      bodyParts: ["Forearms"],
    },
  },
  reverseFly: {
    dumbbell: {
      targetMuscles: ["Deltoid Posterior"],
      synergistMuscles: [
        "Deltoid Lateral",
        "Infraspinatus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
    leverageMachine: {
      targetMuscles: ["Deltoid Posterior"],
      synergistMuscles: [
        "Deltoid Lateral",
        "Infraspinatus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
    band: {
      targetMuscles: ["Deltoid Posterior"],
      synergistMuscles: [
        "Deltoid Lateral",
        "Infraspinatus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  reverseGripConcentrationCurl: {},
  reversePlank: {},
  romanianDeadlift: {
    barbell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Hamstrings", "Quadriceps", "Soleus"],
      bodyParts: ["Hips"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Hamstrings"],
      synergistMuscles: ["Quadriceps", "Soleus"],
      bodyParts: ["Hips"],
    },
  },
  rowing: {},
  russianTwist: {
    bodyweight: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Iliopsoas"],
      bodyParts: ["Waist"],
    },
    dumbbell: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Rectus Abdominis"],
      bodyParts: ["Waist"],
    },
    cable: {
      targetMuscles: ["Obliques"],
      synergistMuscles: [],
      bodyParts: ["Waist"],
    },
  },
  seatedCalfRaise: {
    barbell: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
    dumbbell: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
    leverageMachine: {
      targetMuscles: ["Soleus"],
      synergistMuscles: ["Gastrocnemius"],
      bodyParts: ["Calves"],
    },
  },
  seatedLegCurl: {
    leverageMachine: {
      targetMuscles: ["Hamstrings"],
      synergistMuscles: ["Gastrocnemius", "Sartorius"],
      bodyParts: ["Thighs"],
    },
  },
  seatedLegPress: {
    leverageMachine: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips", "Thighs"],
    },
  },
  seatedOverheadPress: {
    barbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
  },
  seatedPalmsUpWristCurl: {
    dumbbell: {
      targetMuscles: ["Wrist Flexors"],
      synergistMuscles: [],
      bodyParts: ["Forearms"],
    },
  },
  seatedRow: {
    cable: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
    band: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior"],
      bodyParts: ["Back"],
    },
    leverageMachine: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
  },
  seatedWideGripRow: {
    cable: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior"],
      bodyParts: ["Back"],
    },
  },
  shoulderPress: {
    cable: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    dumbbell: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    leverageMachine: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    band: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
    smith: {
      targetMuscles: ["Deltoid Anterior"],
      synergistMuscles: ["Deltoid Lateral", "Pectoralis Major Clavicular Head", "Serratus Anterior", "Triceps Brachii"],
      bodyParts: ["Shoulders"],
    },
  },
  shrug: {
    barbell: {
      targetMuscles: ["Trapezius Upper Fibers"],
      synergistMuscles: ["Levator Scapulae", "Trapezius Middle Fibers"],
      bodyParts: ["Back"],
    },
    cable: {
      targetMuscles: ["Trapezius Upper Fibers"],
      synergistMuscles: ["Trapezius Middle Fibers"],
      bodyParts: ["Back"],
    },
    dumbbell: {
      targetMuscles: ["Trapezius Upper Fibers"],
      synergistMuscles: ["Trapezius Middle Fibers"],
      bodyParts: ["Back"],
    },
    leverageMachine: {
      targetMuscles: ["Trapezius Upper Fibers"],
      synergistMuscles: ["Levator Scapulae", "Trapezius Middle Fibers"],
      bodyParts: ["Back"],
    },
    band: {
      targetMuscles: ["Trapezius Upper Fibers"],
      synergistMuscles: ["Levator Scapulae", "Trapezius Middle Fibers"],
      bodyParts: ["Back"],
    },
    smith: {
      targetMuscles: ["Trapezius Upper Fibers"],
      synergistMuscles: ["Levator Scapulae", "Trapezius Middle Fibers"],
      bodyParts: ["Back"],
    },
  },
  sideBend: {
    cable: {
      targetMuscles: ["Obliques"],
      synergistMuscles: [],
      bodyParts: ["Waist"],
    },
    dumbbell: {
      targetMuscles: ["Obliques"],
      synergistMuscles: [],
      bodyParts: ["Waist"],
    },
    band: {
      targetMuscles: ["Obliques"],
      synergistMuscles: ["Iliopsoas"],
      bodyParts: ["Waist"],
    },
  },
  sidePlank: {
    bodyweight: {
      targetMuscles: ["Obliques"],
      synergistMuscles: [],
      bodyParts: ["Waist"],
    },
  },
  singleLegBridge: {
    bodyweight: {
      targetMuscles: ["Gluteus Maximus", "Rectus Abdominis"],
      synergistMuscles: ["Deltoid Anterior", "Hamstrings", "Obliques", "Serratus Anterior", "Tensor Fasciae Latae"],
      bodyParts: ["Hips"],
    },
  },
  singleLegDeadlift: {
    dumbbell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Hips"],
    },
    bodyweight: {
      targetMuscles: ["Deltoid Anterior", "Erector Spinae", "Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Hamstrings",
        "Pectoralis Major Clavicular Head",
      ],
      bodyParts: ["Hips", "Shoulders", "Thighs"],
    },
  },
  sitUp: {
    bodyweight: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Iliopsoas", "Obliques"],
      bodyParts: ["Waist"],
    },
    kettlebell: {
      targetMuscles: ["Rectus Abdominis"],
      synergistMuscles: ["Obliques"],
      bodyParts: ["Waist"],
    },
  },
  skullcrusher: {
    barbell: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
    cable: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
    dumbbell: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
    ezbar: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
  },
  snatch: {
    dumbbell: {
      targetMuscles: ["Deltoid Anterior", "Erector Spinae", "Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [
        "Adductor Magnus",
        "Deltoid Lateral",
        "Gastrocnemius",
        "Serratus Anterior",
        "Soleus",
        "Triceps Brachii",
      ],
      bodyParts: ["Hips", "Shoulders", "Thighs"],
    },
  },
  snatchPull: {},
  splitJerk: {},
  squat: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
    smith: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    leverageMachine: {
      targetMuscles: ["Pectoralis Major Sternal Head"],
      synergistMuscles: ["Deltoid Anterior", "Pectoralis Major Clavicular Head", "Triceps Brachii"],
      bodyParts: ["Thighs"],
    },
  },
  squatRow: {
    band: {
      targetMuscles: [
        "Gluteus Maximus",
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: [
        "Adductor Magnus",
        "Deltoid Posterior",
        "Pectoralis Major Sternal Head",
        "Quadriceps",
        "Soleus",
      ],
      bodyParts: ["Back"],
    },
  },
  standingCalfRaise: {
    barbell: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
    dumbbell: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
    leverageMachine: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
    bodyweight: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
    cable: {
      targetMuscles: ["Gastrocnemius"],
      synergistMuscles: ["Soleus"],
      bodyParts: ["Calves"],
    },
  },
  stepUp: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Gastrocnemius", "Soleus"],
      bodyParts: ["Hips"],
    },
    bodyweight: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Gastrocnemius", "Soleus"],
      bodyParts: ["Hips"],
    },
    band: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Gastrocnemius", "Quadriceps", "Soleus"],
      bodyParts: ["Hips"],
    },
  },
  stiffLegDeadlift: {
    barbell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Hips"],
    },
    dumbbell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Hips"],
    },
    band: {
      targetMuscles: ["Gluteus Maximus"],
      synergistMuscles: ["Adductor Magnus", "Erector Spinae", "Hamstrings"],
      bodyParts: ["Hips"],
    },
  },
  straightLegDeadlift: {
    barbell: {
      targetMuscles: ["Erector Spinae", "Hamstrings"],
      synergistMuscles: ["Adductor Magnus", "Gluteus Maximus"],
      bodyParts: ["Thighs"],
    },
    dumbbell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Waist"],
    },
    band: {
      targetMuscles: ["Erector Spinae"],
      synergistMuscles: ["Adductor Magnus", "Gluteus Maximus", "Hamstrings"],
      bodyParts: ["Back"],
    },
    kettlebell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings", "Soleus"],
      bodyParts: ["Hips"],
    },
  },
  sumoDeadlift: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus", "Tensor Fasciae Latae"],
      bodyParts: ["Hips"],
    },
  },
  sumoDeadliftHighPull: {
    barbell: {
      targetMuscles: ["Deltoid Lateral", "Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [
        "Adductor Magnus",
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Gastrocnemius",
        "Infraspinatus",
        "Soleus",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  superman: {
    bodyweight: {
      targetMuscles: ["Erector Spinae"],
      synergistMuscles: ["Gluteus Maximus", "Hamstrings"],
      bodyParts: ["Waist"],
    },
    dumbbell: {
      targetMuscles: ["Erector Spinae", "Gluteus Maximus"],
      synergistMuscles: ["Hamstrings"],
      bodyParts: ["Hips"],
    },
  },
  tBarRow: {
    leverageMachine: {
      targetMuscles: [
        "Infraspinatus",
        "Latissimus Dorsi",
        "Teres Major",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      synergistMuscles: ["Brachialis", "Brachioradialis", "Deltoid Posterior", "Pectoralis Major Sternal Head"],
      bodyParts: ["Back"],
    },
  },
  thruster: {
    barbell: {
      targetMuscles: ["Deltoid Anterior", "Gluteus Maximus", "Quadriceps"],
      synergistMuscles: [
        "Adductor Magnus",
        "Deltoid Lateral",
        "Pectoralis Major Clavicular Head",
        "Serratus Anterior",
        "Soleus",
        "Triceps Brachii",
      ],
      bodyParts: ["Shoulders", "Thighs"],
    },
  },
  toesToBar: {
    bodyweight: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: ["Obliques", "Quadriceps", "Sartorius", "Tensor Fasciae Latae"],
      bodyParts: ["Waist"],
    },
  },
  torsoRotation: {},
  trapBarDeadlift: {
    trapbar: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Thighs"],
    },
  },
  tricepsDip: {
    bodyweight: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [
        "Deltoid Anterior",
        "Latissimus Dorsi",
        "Levator Scapulae",
        "Pectoralis Major Clavicular Head",
        "Pectoralis Major Sternal Head",
      ],
      bodyParts: ["Upper Arms"],
    },
    leverageMachine: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: ["Latissimus Dorsi", "Pectoralis Major Sternal Head", "Teres Major"],
      bodyParts: ["Upper Arms"],
    },
  },
  tricepsExtension: {
    barbell: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
    cable: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
    band: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
    dumbbell: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
  },
  tricepsPushdown: {
    cable: {
      targetMuscles: ["Triceps Brachii"],
      synergistMuscles: [],
      bodyParts: ["Upper Arms"],
    },
  },
  uprightRow: {
    barbell: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Infraspinatus",
        "Serratus Anterior",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
    cable: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: [
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Infraspinatus",
        "Serratus Anterior",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
    dumbbell: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Infraspinatus",
        "Serratus Anterior",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
    band: {
      targetMuscles: ["Deltoid Lateral"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Deltoid Anterior",
        "Infraspinatus",
        "Serratus Anterior",
        "Teres Minor",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Shoulders"],
    },
  },
  vUp: {
    bodyweight: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Obliques",
        "Pectineous",
        "Quadriceps",
        "Sartorius",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Waist"],
    },
    band: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: [
        "Adductor Brevis",
        "Adductor Longus",
        "Obliques",
        "Pectineous",
        "Quadriceps",
        "Sartorius",
        "Tensor Fasciae Latae",
      ],
      bodyParts: ["Waist"],
    },
    dumbbell: {
      targetMuscles: ["Iliopsoas", "Rectus Abdominis"],
      synergistMuscles: ["Obliques", "Quadriceps", "Sartorius"],
      bodyParts: ["Waist"],
    },
  },
  widePullUp: {
    bodyweight: {
      targetMuscles: ["Latissimus Dorsi"],
      synergistMuscles: [
        "Biceps Brachii",
        "Brachialis",
        "Brachioradialis",
        "Teres Major",
        "Trapezius Lower Fibers",
        "Trapezius Middle Fibers",
      ],
      bodyParts: ["Back"],
    },
  },
  wristRoller: {
    bodyweight: {
      targetMuscles: ["Wrist Extensors", "Wrist Flexors"],
      synergistMuscles: [],
      bodyParts: ["Forearms"],
    },
  },
  zercherSquat: {
    barbell: {
      targetMuscles: ["Gluteus Maximus", "Quadriceps"],
      synergistMuscles: ["Adductor Magnus", "Soleus"],
      bodyParts: ["Hips"],
    },
  },
};

export const TExerciseId = t.keyof(
  exerciseTypes.reduce<Record<IArrayElement<typeof exerciseTypes>, null>>((memo, exerciseType) => {
    memo[exerciseType] = null;
    return memo;
  }, {} as Record<IArrayElement<typeof exerciseTypes>, null>),
  "TExerciseId"
);
export type IExerciseId = t.TypeOf<typeof TExerciseId>;

export const TExerciseType = t.intersection(
  [
    t.interface({
      id: TExerciseId,
    }),
    t.partial({
      bar: TBarKey,
    }),
  ],
  "TExerciseType"
);
export type IExerciseType = t.TypeOf<typeof TExerciseType>;

export type IExercise = {
  id: IExerciseId;
  name: string;
  warmupSets: (weight: IWeight, settings: ISettings, bar?: IBarKey) => ISet[];
  bar?: keyof IBars;
  defaultBar?: keyof IBars;
};

function warmup45(weight: IWeight, settings: ISettings, bar?: IBarKey): ISet[] {
  return warmup({ 45: 0.8, 90: 0.5, 120: 0.3 })(weight, settings, bar);
}

function warmup95(weight: IWeight, settings: ISettings, bar?: IBarKey): ISet[] {
  return warmup({ 95: 0.8, 125: 0.5, 150: 0.3 })(weight, settings, bar);
}

function warmup10(weight: IWeight, settings: ISettings, bar?: IBarKey): ISet[] {
  return warmup({ 10: 0.8, 30: 0.5, 60: 0.3 })(weight, settings, bar);
}

function warmup(mapping: Record<number, number>): (weight: IWeight, settings: ISettings, bar?: IBarKey) => ISet[] {
  return (weight: IWeight, settings: ISettings, bar?: IBarKey): ISet[] => {
    const percents: number[] = [];
    ObjectUtils.keys(mapping).forEach((weightValue) => {
      const percent = mapping[weightValue];
      if (Weight.gt(weight, Weight.build(weightValue, "lb"))) {
        percents.unshift(percent);
      }
    });
    return percents.map((percent) => {
      return {
        reps: 5,
        weight: Weight.max(
          bar != null ? Settings.bars(settings)[bar] : Weight.build(0, settings.units),
          Weight.roundConvertTo(Weight.multiply(weight, percent), settings, bar)
        ),
      };
    });
  };
}

function warmupEmpty(weight: IWeight): ISet[] {
  return [];
}

export namespace Exercise {
  export function get(type: IExerciseType): IExercise {
    return { ...exercises[type.id], bar: type.bar };
  }

  export function getById(id: IExerciseId): IExercise {
    return { ...exercises[id], bar: exercises[id].defaultBar };
  }

  export function all(): IExercise[] {
    return ObjectUtils.keys(exercises).map((k) => ({ ...exercises[k], bar: exercises[k].defaultBar }));
  }

  export function eq(a: IExerciseType, b: IExerciseType): boolean {
    return a.id === b.id && a.bar === b.bar;
  }

  export function getWarmupSets(exercise: IExerciseType, weight: IWeight, settings: ISettings): ISet[] {
    return get(exercise).warmupSets(weight, settings, exercise.bar);
  }

  export function targetMuscles(type: IExerciseType): IMuscle[] {
    const meta = metadata[type.id][type.bar || "bodyweight"];
    return meta != null ? meta.targetMuscles : [];
  }

  export function defaultEquipment(type: IExerciseId): IEquipment | undefined {
    const priorities: Record<IEquipment, IEquipment[]> = {
      barbell: ["ezbar", "trapbar", "dumbbell", "kettlebell"],
      cable: ["band", "leverageMachine"],
      dumbbell: ["barbell", "kettlebell", "bodyweight"],
      smith: ["leverageMachine", "dumbbell", "barbell", "kettlebell", "cable"],
      band: ["cable", "bodyweight", "leverageMachine", "smith"],
      kettlebell: ["dumbbell", "barbell", "cable"],
      bodyweight: ["cable", "dumbbell", "barbell", "band"],
      leverageMachine: ["smith", "cable", "dumbbell", "barbell", "kettlebell"],
      medicineball: ["bodyweight", "cable"],
      ezbar: ["barbell", "dumbbell", "cable"],
      trapbar: ["barbell", "dumbbell", "cable"],
    };

    const bar = exercises[type].defaultBar || "bodyweight";
    let equipment: IEquipment | undefined = ObjectUtils.keys(metadata[type]).find((b) => b === bar);
    equipment = equipment || priorities[bar].find((eqp) => ObjectUtils.keys(metadata[type]).indexOf(eqp) !== -1);
    equipment = equipment || ObjectUtils.keys(metadata[type])[0];
    return equipment;
  }
}
