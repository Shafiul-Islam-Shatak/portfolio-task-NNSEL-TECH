import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String },
  img: { type: String},
  client: { type: String },
  work: { type: Array },
});

// Use the correct model name (Projects)
export default mongoose.models.Projects || mongoose.model('Projects', ProjectSchema);
