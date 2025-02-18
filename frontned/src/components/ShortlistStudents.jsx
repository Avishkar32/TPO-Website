import React, { useState } from 'react';
import { Search, Check, X } from 'lucide-react';

const ShortlistStudents = ({ appliedStudents, onSave }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  
  const filteredStudents = appliedStudents.filter(student => 
    student.studentname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStudent = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-blue-500">Shortlist Students</h3>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredStudents.map(student => (
          <label
            key={student._id}
            className="flex items-center justify-between p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedStudents.includes(student._id)}
                onChange={() => toggleStudent(student._id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700">{student.studentname}</span>
            </div>
            {selectedStudents.includes(student._id) && (
              <Check className="h-5 w-5 text-blue-500" />
            )}
          </label>
        ))}
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => setSelectedStudents([])}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Clear All
        </button>
        <button
          onClick={() => onSave(selectedStudents)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Selection
        </button>
      </div>
    </div>
  );
};

export default ShortlistStudents;
