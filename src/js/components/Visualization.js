/**
 * Created by me on 3/22/2018.
 */
import React, { Component } from 'react';
import vis from './../../../node_modules/vis';

const divStyle = {
    height:800
};

class Visualization extends Component {
    render() {
        setTimeout(this.createNetwork.bind(this),100);
        return (
            <div ref="container" style={divStyle}></div>
        );
    }

    createNetwork(){
        var options = {
            autoResize: true,
            height: '100%',
            width: '100%',
            locale: 'en',
            clickToUse: false
        }

        var data = {
            "nodes" : [
                { "id": 101, "label": "Project101", "color" : "#DAD37B", "font" : {"size" : 24}, "mass" : 2 },
                { "id": 102, "label": "Project102", "color" : "#DAD37B", "font" : {"size" : 24}, "mass" : 2 },
                { "id": 103, "label": "Project103", "color" : "#DAD37B", "font" : {"size" : 24}, "mass" : 2 },
                { "id": 104, "label": "Project104", "color" : "#DAD37B", "font" : {"size" : 24}, "mass" : 2 },
                { "id": 105, "label": "Project105", "color" : "#DAD37B", "font" : {"size" : 24}, "mass" : 2 },

                { "id": 106, "label": "Customer106", "color" : "#939A94" },                { "id": 107, "label": "Customer107", "color" : "#939A94" },
                { "id": 108, "label": "Customer108", "color" : "#939A94" },                { "id": 109, "label": "Customer109", "color" : "#939A94" },
                { "id": 110, "label": "Customer110", "color" : "#939A94" },                { "id": 111, "label": "Customer111", "color" : "#939A94" },
                { "id": 112, "label": "Customer112", "color" : "#939A94" },                { "id": 113, "label": "Customer113", "color" : "#939A94" },
                { "id": 114, "label": "Customer114", "color" : "#939A94" },                { "id": 115, "label": "Customer115", "color" : "#939A94" },
                { "id": 116, "label": "Customer116", "color" : "#939A94" },                { "id": 117, "label": "Customer117", "color" : "#939A94" },
                { "id": 118, "label": "Customer118", "color" : "#939A94" },                { "id": 119, "label": "Customer119", "color" : "#939A94" },
                { "id": 120, "label": "Customer120", "color" : "#939A94" },                { "id": 121, "label": "Customer121", "color" : "#939A94" },
                { "id": 122, "label": "Customer122", "color" : "#939A94" },                { "id": 123, "label": "Customer123", "color" : "#939A94" },
                { "id": 124, "label": "Customer124", "color" : "#939A94" },                { "id": 125, "label": "Customer125", "color" : "#939A94" },
                { "id": 126, "label": "Customer126", "color" : "#939A94" },                { "id": 127, "label": "Customer127", "color" : "#939A94" },
                { "id": 128, "label": "Customer128", "color" : "#939A94" },                { "id": 129, "label": "Customer129", "color" : "#939A94" },
                { "id": 130, "label": "Customer130", "color" : "#939A94" }
            ],
            "edges" : [
                { "id": 101, "from": 101, "to": 121	 },                { "id": 102, "from": 101, "to": 112	 },                { "id": 103, "from": 101, "to": 129	 },                { "id": 104, "from": 101, "to": 114	 },
                { "id": 105, "from": 101, "to": 125	 },                { "id": 106, "from": 101, "to": 120	 },                { "id": 107, "from": 101, "to": 106	 },                { "id": 108, "from": 101, "to": 124	 },
                { "id": 109, "from": 101, "to": 114	 },                { "id": 110, "from": 102, "to": 122	 },                { "id": 111, "from": 102, "to": 130	 },                { "id": 112, "from": 102, "to": 126	 },
                { "id": 113, "from": 102, "to": 119	 },                { "id": 114, "from": 102, "to": 116	 },                { "id": 115, "from": 102, "to": 115	 },                { "id": 116, "from": 103, "to": 124	 },
                { "id": 118, "from": 103, "to": 109	 },                { "id": 119, "from": 103, "to": 126	 },                { "id": 120, "from": 103, "to": 118	 },                { "id": 122, "from": 103, "to": 118	 },
                { "id": 123, "from": 103, "to": 123	 },                { "id": 124, "from": 104, "to": 115	 },                { "id": 125, "from": 104, "to": 128	 },                { "id": 126, "from": 104, "to": 110	 },
                { "id": 127, "from": 104, "to": 114	 },                { "id": 128, "from": 104, "to": 118	 },                { "id": 129, "from": 104, "to": 112	 },                { "id": 130, "from": 104, "to": 116	 },
                { "id": 131, "from": 104, "to": 128	 },                { "id": 132, "from": 104, "to": 128	 },                { "id": 133, "from": 104, "to": 123	 },                { "id": 134, "from": 104, "to": 108	 },
                { "id": 135, "from": 104, "to": 116	 },                { "id": 136, "from": 105, "to": 119	 },                { "id": 137, "from": 105, "to": 115	 },                { "id": 138, "from": 105, "to": 117	 },
                { "id": 139, "from": 105, "to": 126	 },                { "id": 140, "from": 105, "to": 112	 },                { "id": 141, "from": 105, "to": 127	 },                { "id": 142, "from": 105, "to": 112	 },
                { "id": 143, "from": 105, "to": 125	 },                { "id": 144, "from": 105, "to": 128	 },                { "id": 145, "from": 105, "to": 110	 },                { "id": 146, "from": 105, "to": 128   },
                { "id": 147, "from": 105, "to": 113	 },                { "id": 148, "from": 101, "to": 107	 },                { "id": 149, "from": 102, "to": 107	 },                { "id": 150, "from": 101, "to": 111	 },
                { "id": 151, "from": 102, "to": 111	 },                { "id": 152, "from": 103, "to": 111	 },                { "id": 153, "from": 101, "to": 112	 },                { "id": 154, "from": 102, "to": 112	 },
                { "id": 155, "from": 104, "to": 108  },                { "id": 156, "from": 105, "to": 108	 }
            ]
        };
        var container = document.getElementById("container");
        var network = new vis.Network(this.refs.container, data, options);
    }
}

export default Visualization;
