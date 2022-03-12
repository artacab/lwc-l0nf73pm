import { LightningElement, api, track } from "lwc";

/**
 * Show an item
 */
export default class todoList extends LightningElement {
  @track isShow = true;

  @track todos = [
    {
      id: 1,
      title: "feed cat",
      description: "felix",
      priority: 'high',
      created: Date.now()
    },
    { 
      id: 2,
      title: "play xbox",
      description: "fifa22",
      priority: 'low',
      created: Date.now()
    },
    { 
      id: 3,
      title: "go shopping",
      description: "hleb",
      priority: 'medium',
      created: Date.now()
    }
  ]

  handleClose() {
    this.isShow = false;
  }
  handleShow() {
    this.isShow = true;
  }
}
