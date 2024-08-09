import { firebaseConfig } from "../firebase/firebaseInit";
import endpoints from "./endpoints";

class ProjectService {
  static async addProject(newData: any) {
    return await fetch(`${firebaseConfig.databaseURL}/${endpoints.PROJECTS.TEST}`, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.ok);
  }
}

export default ProjectService;
