import React, { useState } from 'react';
import { Send, Trash2 } from 'lucide-react';

const FeedbackFormold = () => {
  const [formData, setFormData] = useState({
    overview: {
      numQuestions: null,
      difficulty: null
    },
    topics: {
      'Arrays': { numQuestions: null, difficulty: null },
      'Strings': { numQuestions: null, difficulty: null },
      'Linked Lists': { numQuestions: null, difficulty: null },
      'Binary Trees/Graphs': { numQuestions: null, difficulty: null },
      'Dynamic Programming': { numQuestions: null, difficulty: null }
    }
  });

  const topics = ['Arrays', 'Strings', 'Linked Lists', 'Binary Trees/Graphs', 'Dynamic Programming'];

  const updateOverviewNumQuestions = (num) => {
    setFormData(prev => ({
      ...prev,
      overview: { ...prev.overview, numQuestions: num }
    }));
  };

  const updateOverviewDifficulty = (difficulty) => {
    setFormData(prev => ({
      ...prev,
      overview: { ...prev.overview, difficulty }
    }));
  };

  const updateTopicNumQuestions = (topic, num) => {
    setFormData(prev => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topic]: { ...prev.topics[topic], numQuestions: num }
      }
    }));
  };

  const updateTopicDifficulty = (topic, difficulty) => {
    setFormData(prev => ({
      ...prev,
      topics: {
        ...prev.topics,
        [topic]: { ...prev.topics[topic], difficulty }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');
  };

  const clearForm = () => {
    setFormData({
      overview: { numQuestions: null, difficulty: null },
      topics: {
        'Arrays': { numQuestions: null, difficulty: null },
        'Strings': { numQuestions: null, difficulty: null },
        'Linked Lists': { numQuestions: null, difficulty: null },
        'Binary Trees/Graphs': { numQuestions: null, difficulty: null },
        'Dynamic Programming': { numQuestions: null, difficulty: null }
      }
    });
  };

  const isFormComplete = () => {
    const hasOverview = formData.overview.numQuestions !== null &&
                        formData.overview.difficulty !== null;
    const hasAllTopics = topics.every(topic =>
      formData.topics[topic].numQuestions !== null &&
      formData.topics[topic].difficulty !== null
    );
    return hasOverview && hasAllTopics;
  };

  const OverviewQuestions = () => {
    return (
      <div className="rounded-lg bg-gray-50 p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview Questions</h2>
        <div className="space-y-8">
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-6">
              How many questions were asked during the round?
            </label>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="overviewNumQuestions"
                    value={num}
                    checked={formData.overview.numQuestions === num}
                    onChange={() => updateOverviewNumQuestions(num)}
                    className="form-radio h-7 w-7 text-primary-600"
                  />
                  <span className="ml-3 text-xl">{num}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-6">
              What was the overall difficulty level of the round?
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Easy', 'Medium', 'Hard'].map((level) => (
                <label key={level} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="overviewDifficulty"
                    value={level}
                    checked={formData.overview.difficulty === level}
                    onChange={() => updateOverviewDifficulty(level)}
                    className="form-radio h-7 w-7 text-primary-600"
                  />
                  <span className="ml-3 text-xl">{level}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TopicSection = ({ topic }) => {
    const topicData = formData.topics[topic];

    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{topic}</h3>
        <div className="space-y-8">
          <div>
            <label className="block text-xl font-bold text-gray-700 mb-6">
              How many questions were asked on {topic.toLowerCase()}?
            </label>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`${topic}NumQuestions`}
                    value={num}
                    checked={topicData.numQuestions === num}
                    onChange={() => updateTopicNumQuestions(topic, num)}
                    className="form-radio h-7 w-7 text-primary-600"
                  />
                  <span className="ml-3 text-xl">{num}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xl font-bold text-gray-700 mb-6">
              What was the difficulty level of {topic.toLowerCase()} questions?
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Easy', 'Medium', 'Hard'].map((level) => (
                <label key={level} className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`${topic}Difficulty`}
                    value={level}
                    checked={topicData.difficulty === level}
                    onChange={() => updateTopicDifficulty(topic, level)}
                    className="form-radio h-7 w-7 text-primary-600"
                  />
                  <span className="ml-3 text-xl">{level}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-10">
        <div className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 py-4 mb-6 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-white">Interview Round Feedback Form</h1>
          <p className="text-1xl text-primary-100 mt-2">Please provide your feedback about the interview questions</p>
        </div>

        <OverviewQuestions />

        <div className="space-y-10">
          {topics.map(topic => (
            <TopicSection key={topic} topic={topic} />
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Review Your Responses</h2>
            <p className="text-sm text-gray-600">
              {Object.values(formData.topics).filter(
                topic => topic.numQuestions !== null && topic.difficulty !== null
              ).length +
                (formData.overview.numQuestions !== null && formData.overview.difficulty !== null ? 1 : 0)}/6 questions answered
            </p>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={!isFormComplete()}
              className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base transition-colors duration-200 ${
                isFormComplete()
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
            >
              <Send className="mr-2" /> Submit Form
            </button>

            <button
              type="button"
              onClick={clearForm}
              className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base text-gray-700 bg-white hover:bg-gray-50"
            >
              <Trash2 className="mr-2" /> Clear Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackFormold;
