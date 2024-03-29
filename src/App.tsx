import "./styles.css";
import {Form, Formio} from '@formio/react';
//import CustomAntDComp from './components/antd';
import FormioContrib from '@formio/contrib';
// //import { Formio } from '@formio/js';

// "inputMask": "(999)-999-9999",

Formio.use(FormioContrib);
declare global {
  interface Window {
    tenantSettings: { showFn: boolean };
  }
}

window.tenantSettings = { showFn: true };

let form  = {
  "_id": "5b8c14217f43cc293958e2bc",
  "type": "form",
  "tags": [],
  "owner": "553dbfc08d22d5cb1a7024f2",
  "components": [
    {
      "input": false,
      "html": "<h1><a href=\"https://form.io\">Form.io</a> Example Form TEST</h1>\n\n<p>This is a dynamically rendered JSON form&nbsp;built with <a href=\"https://form.io\">Form.io</a>. Using a simple&nbsp;drag-and-drop form builder, you can create any form that includes e-signatures, wysiwyg editors, date fields, layout components, data grids, surveys, etc.</p>\n",
      "type": "content",
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      }
    },
    {
      "input": false,
      "columns": [
        {
          "components": [
            {
              "type": "ant_input",
              "key": "website.address",
              "inputMask": "(999)-999-9999",
              "suffix": ".com",
              "size": "medium",
              "prefix": "https://",
              "placeholder": "this is antd input",
              "customConditional": "show = window.tenantSettings.showFn",
            },
            {
              "tabindex": "1",
              "tags": [],
              "clearOnHide": true,
              "hidden": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "First Name",
              "key": "firstName",
              "placeholder": "Enter your first name",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "validate": {
                "required": false,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
              },
              "customConditional": "show = window.tenantSettings.showFn",
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "autofocus": false,
              "spellcheck": true
            },
            {
              "tabindex": "3",
              "tags": [],
              "clearOnHide": true,
              "hidden": false,
              "input": true,
              "tableView": true,
              "inputType": "email",
              "label": "Email",
              "key": "email",
              "placeholder": "Enter your email address",
              "prefix": "",
              "suffix": "",
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "type": "email",
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "kickbox": {
                "enabled": false
              },
              "autofocus": false
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0
        },
        {
          "components": [
            {
              "tabindex": "2",
              "tags": [],
              "clearOnHide": true,
              "hidden": false,
              "input": true,
              "tableView": true,
              "inputType": "text",
              "inputMask": "",
              "label": "Last Name",
              "key": "lastName",
              "placeholder": "Enter your last name",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "defaultValue": "",
              "protected": false,
              "unique": false,
              "persistent": true,
              "validate": {
                "required": false,
                "minLength": "",
                "maxLength": "",
                "pattern": "",
                "custom": "",
                "customPrivate": false
              },
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "type": "textfield",
              "autofocus": false,
              "spellcheck": true
            },
            {
              "tabindex": "4",
              "tags": [],
              "clearOnHide": true,
              "hidden": false,
              "input": true,
              "tableView": true,
              "inputMask": "(999) 999-9999",
              "label": "Phone Number",
              "key": "phoneNumber",
              "placeholder": "Enter your phone number",
              "prefix": "",
              "suffix": "",
              "multiple": false,
              "protected": false,
              "unique": false,
              "persistent": true,
              "defaultValue": "",
              "validate": {
                "required": false
              },
              "type": "phoneNumber",
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "autofocus": false,
              "inputType": "tel"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0
        }
      ],
      "type": "columns",
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "clearOnHide": false,
      "label": "Columns",
      "hideLabel": true,
      "tableView": false
    },
    {
      "tabindex": "5",
      "tags": [],
      "clearOnHide": true,
      "hidden": false,
      "input": true,
      "tableView": true,
      "label": "Survey",
      "key": "survey",
      "questions": [
        {
          "value": "howWouldYouRateTheFormIoPlatform",
          "label": "How would you rate the Form.io platform?"
        },
        {
          "value": "howWasCustomerSupport",
          "label": "How was Customer Support?"
        },
        {
          "value": "overallExperience",
          "label": "Overall Experience?"
        }
      ],
      "values": [
        {
          "value": "excellent",
          "label": "Excellent"
        },
        {
          "value": "great",
          "label": "Great"
        },
        {
          "value": "good",
          "label": "Good"
        },
        {
          "value": "average",
          "label": "Average"
        },
        {
          "value": "poor",
          "label": "Poor"
        }
      ],
      "defaultValue": "",
      "protected": false,
      "persistent": true,
      "validate": {
        "required": false,
        "custom": "",
        "customPrivate": false
      },
      "type": "survey",
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      }
    },
    {
      "tags": [],
      "clearOnHide": true,
      "hidden": false,
      "input": true,
      "tableView": true,
      "label": "Signature",
      "key": "signature",
      "placeholder": "",
      "footer": "Sign above",
      "width": "100%",
      "height": "150px",
      "penColor": "black",
      "backgroundColor": "rgb(245,245,235)",
      "minWidth": "0.5",
      "maxWidth": "2.5",
      "protected": false,
      "persistent": true,
      "validate": {
        "required": false
      },
      "type": "signature",
      "hideLabel": true,
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      }
    },
    {
      "tabindex": "6",
      "conditional": {
        "eq": "",
        "when": null,
        "show": ""
      },
      "tags": [],
      "input": true,
      "label": "Submit",
      "tableView": false,
      "key": "submit",
      "size": "md",
      "leftIcon": "",
      "rightIcon": "",
      "block": false,
      "action": "submit",
      "disableOnInvalid": true,
      "theme": "primary",
      "type": "button",
      "autofocus": false
    }
  ],
  "revisions": "",
  "_vid": 0,
  "title": "Example",
  "display": "form",
  "access": [
    {
      "roles": [],
      "type": "create_own"
    },
    {
      "roles": [],
      "type": "create_all"
    },
    {
      "roles": [],
      "type": "read_own"
    },
    {
      "roles": [
        "58b78b87f5609a0070f3f457",
        "58b78b87f5609a0070f3f458",
        "58b78b87f5609a0070f3f459"
      ],
      "type": "read_all"
    },
    {
      "roles": [],
      "type": "update_own"
    },
    {
      "roles": [],
      "type": "update_all"
    },
    {
      "roles": [],
      "type": "delete_own"
    },
    {
      "roles": [],
      "type": "delete_all"
    },
    {
      "roles": [],
      "type": "team_read"
    },
    {
      "roles": [],
      "type": "team_write"
    },
    {
      "roles": [],
      "type": "team_admin"
    }
  ],
  "submissionAccess": [
    {
      "roles": [
        "58b78b87f5609a0070f3f458",
        "58b78b87f5609a0070f3f459"
      ],
      "type": "create_own"
    },
    {
      "roles": [],
      "type": "create_all"
    },
    {
      "roles": [],
      "type": "read_own"
    },
    {
      "roles": [],
      "type": "read_all"
    },
    {
      "roles": [],
      "type": "update_own"
    },
    {
      "roles": [],
      "type": "update_all"
    },
    {
      "roles": [],
      "type": "delete_own"
    },
    {
      "roles": [],
      "type": "delete_all"
    },
    {
      "roles": [],
      "type": "team_read"
    },
    {
      "roles": [],
      "type": "team_write"
    },
    {
      "roles": [],
      "type": "team_admin"
    }
  ],
  "settings": {},
  "name": "example",
  "path": "example",
  "project": "58b78b87f5609a0070f3f456",
  "created": "2018-09-02T16:47:29.444Z",
  "modified": "2018-09-02T16:49:54.493Z",
  "machineName": "fkdmhegmfwcwdca:example",
  "plan": "commercial"
};
let formData = { data :{  website: { address:"(234)-234-23443243" } }};
//let formData = { data :{  website: "www.google" } };
//https://github.com/formio/react-app-starterkit
//src="https://example.form.io/example"
//https://github.com/formio/react
export default function App() {
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>             
        <Form form={form} onSubmit={console.log} submission={formData}/>    
      </div>
    </div>
    
  );
}
