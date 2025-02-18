import React, { useState } from 'react';
import { Send, Trash2 } from 'lucide-react';
import {  CheckCircle, HelpCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const FeedbackForm = () => {
    const { id } = useParams();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    
   

    try {
        const response = await axios.patch(`http://127.0.0.1:5000/api/jobs/addfeedback/${id}`, formData, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data);

        toast.success('Feedback submitted successfully!', {
          icon: '🎉',
          style: {
              border: '1px solid #96c93d',
          },
      });
    } catch (err) {
        console.error(err.response ? err.response.data : err);
        toast.error('Failed to save!', {
           
           
        });
    }
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
      <div className="bg-white/90 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transition-all duration-300 transform hover:-translate-y-1">
        <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-blue-800">Overview Questions</h2>
          <p className="text-blue-600/70">General feedback about the interview round</p>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-blue-800">
              How many questions were asked during the round?
            </label>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="relative">
                  <input
                    type="radio"
                    name="overviewNumQuestions"
                    value={num}
                    checked={formData.overview.numQuestions === num}
                    onChange={() => updateOverviewNumQuestions(num)}
                    className="sr-only peer"
                  />
                  <div className="h-12 flex items-center justify-center rounded-lg border-2 border-blue-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                    <span className="text-lg font-medium text-blue-800">{num}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-lg font-semibold text-blue-800">
              What was the overall difficulty level?
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Easy', 'Medium', 'Hard'].map((level) => (
                <label key={level} className="relative">
                  <input
                    type="radio"
                    name="overviewDifficulty"
                    value={level}
                    checked={formData.overview.difficulty === level}
                    onChange={() => updateOverviewDifficulty(level)}
                    className="sr-only peer"
                  />
                  <div className="h-12 flex items-center justify-center rounded-lg border-2 border-blue-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                    <span className="text-lg font-medium text-blue-800">{level}</span>
                  </div>
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
      <div className="bg-white/90 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(8,_112,_184,_0.1)] transition-all duration-300 transform hover:-translate-y-1">
        <div className="bg-gradient-to-r from-blue-600/10 to-transparent p-6 rounded-t-lg">
          <h3 className="text-2xl font-bold text-blue-800">{topic}</h3>
          <p className="text-blue-600/70">Topic specific questions</p>
        </div>

        <div className="p-6 space-y-8">
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-blue-800">
              Number of questions on {topic.toLowerCase()}
            </label>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="relative">
                  <input
                    type="radio"
                    name={`${topic}NumQuestions`}
                    value={num}
                    checked={topicData.numQuestions === num}
                    onChange={() => updateTopicNumQuestions(topic, num)}
                    className="sr-only peer"
                  />
                  <div className="h-12 flex items-center justify-center rounded-lg border-2 border-blue-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                    <span className="text-lg font-medium text-blue-800">{num}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-lg font-semibold text-blue-800">
              Difficulty level
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Easy', 'Medium', 'Hard'].map((level) => (
                <label key={level} className="relative">
                  <input
                    type="radio"
                    name={`${topic}Difficulty`}
                    value={level}
                    checked={topicData.difficulty === level}
                    onChange={() => updateTopicDifficulty(topic, level)}
                    className="sr-only peer"
                  />
                  <div className="h-12 flex items-center justify-center rounded-lg border-2 border-blue-200 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-hover:bg-blue-50/50 transition-all duration-300 cursor-pointer">
                    <span className="text-lg font-medium text-blue-800">{level}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-3">
            Interview Feedback
          </h1>
          <p className="text-blue-600/70 text-lg">
            Share your interview experience to help others prepare better
          </p>
        </div>

        <OverviewQuestions />

        <div className="space-y-8">
          {topics.map(topic => (
            <TopicSection key={topic} topic={topic} />
          ))}
        </div>

        {/* Footer Card */}
        <div className="bg-white/90 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold text-blue-800">
                Form Completion Status
              </span>
            </div>
            <span className="text-blue-600 font-medium">
              {Object.values(formData.topics).filter(
                topic => topic.numQuestions !== null && topic.difficulty !== null
              ).length +
                (formData.overview.numQuestions !== null && formData.overview.difficulty !== null ? 1 : 0)}/6 sections completed
            </span>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={!isFormComplete()}
              className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                isFormComplete()
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="mr-2 w-5 h-5" /> Submit Feedback
            </button>

            <button
              type="button"
              onClick={clearForm}
              className="flex items-center justify-center px-6 py-3 border-2 border-blue-200 rounded-lg text-blue-600 hover:bg-blue-50/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Trash2 className="mr-2 w-5 h-5" /> Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
