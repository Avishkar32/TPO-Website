const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    companyName: {
        type: String,
        trim: true,
        required: [true, "Please enter company name"]
    },
    role: {
        type: String,
        required: [true, "Please enter role"]
    },
    location: {
        type: String,
        enum: ["On-site", "Hybrid", "Remote"],
        required: [true, "Please select job location"]
    },
    jobType: {
        type: String,
        enum: ["Full-time", "Internship", "PPO", "Part-time", "Contract"],
        required: [true, "Please select job type"]
    },
    stipendAmount: {
        type: Number,
        required: [true, "Please enter stipend or salary amount"]
    },
    duration: {
        type: Number, // in months
        required: [true, "Please enter job duration in months"]
    },
    applicationDeadline: {
        type: Date,
        required: [true, "Please enter the application deadline"]
    },
    eligibility: {
        graduationYear: {
            type: [Number], // e.g., [2025, 2026]
            required: [true, "Please specify eligible graduation years"]
        },
        branchEligibility: {
            type: [String], // e.g., ['CSE', 'ECE']
            required: [true, "Please specify eligible branches"]
        },
        minCGPA: {
            type: Number,
            required: [true, "Please specify the minimum CGPA"]
        },
        skillsRequired: {
            type: [String], // e.g., ['Java', 'Python', 'DSA']
        },
        experienceLevel: {
            type: String,
            enum: ["Fresher", "Experienced"],
            default: "Fresher"
        }
    },
    numberOfOpenings: {
        type: Number,
        required: [true, "Please specify the number of openings"]
    },
    selectionProcess: {
        numberOfRounds: {
            type: Number,
            required: [true, "Please enter the number of selection rounds"]
        },
        roundTypes: {
            type: [String], // e.g., ['Aptitude Test', 'Coding Round']
            required: [true, "Please specify the types of rounds"]
        }
    },
    status: {
        type: String,
        enum: ["applicationsOpen", "ongoing", "completed"],
        default: "applicationsOpen"
    },
    studentsApplied: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],

    analytics: {
      overview: {
          totalQuestionsResponses: { type: [Number], default: [] },
          difficultyResponses: {
              type: Map,
              of: Number,
              default: { Easy: 0, Medium: 0, Hard: 0 },
          },
      },
      detailedBreakdown: {
          type: Map,
          of: new Schema({
              questionsResponses: { type: [Number], default: [] },
              difficultyResponses: {
                  type: Map,
                  of: Number,
                  default: { Easy: 0, Medium: 0, Hard: 0 }
              }
          }, { _id: false }),
          default: {
              Arrays: {
                  questionsResponses: [],
                  difficultyResponses: { Easy: 0, Medium: 0, Hard: 0 }
              },
              "Binary Trees/Graphs": {
                  questionsResponses: [],
                  difficultyResponses: { Easy: 0, Medium: 0, Hard: 0 }
              },
              "Dynamic Programming": {
                  questionsResponses: [],
                  difficultyResponses: { Easy: 0, Medium: 0, Hard: 0 }
              },
              "Linked Lists": {
                  questionsResponses: [],
                  difficultyResponses: { Easy: 0, Medium: 0, Hard: 0 }
              },
              Strings: {
                  questionsResponses: [],
                  difficultyResponses: { Easy: 0, Medium: 0, Hard: 0 }
              }
          }
      }
  }
      
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
