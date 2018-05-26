import { map } from "../../helpers";
class CheckpointModel {
  constructor({ task = "", resourceUrl = "" } = {}) {
    this.task = task;
    this.resourceUrl = resourceUrl;
  }
}

class CourseModel {
  static Checkpoint = CheckpointModel;
  static schemata = {
    create: null,
    edit: null
  };

  constructor({
    goal = "",
    checkpoints = [new CheckpointModel()],
    description = ""
  } = {}) {
    this.goal = goal;
    this.checkpoints = map(cp => new CheckpointModel(cp), checkpoints);
    this.description = description;
  }
}

export default CourseModel;
