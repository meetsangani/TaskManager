const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  timeSlots: [
    {
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
      notes: { type: String }
    }
  ],
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;