import ReactDOM from "react-dom";
import mixitup from "mixitup";
import React from "react";

const Filters = React.createClass({
  getInitialState() {
    return {
      // Just filtering by type for now, but this will be an object
      filter: "",
      items: [
        {
          id: 1,
          title: "Papyrus",
          type: "ecommerce",
        },
        {
          id: 2,
          title: "Clinton Foundation",
          type: "intranet",
        },
        {
          id: 3,
          title: "Maddie",
          type: "ecommerce",
        },
        {
          id: 4,
          title: "WCHN",
          type: "intranet",
        },
      ],
    };
  },

  renderItems() {
    let items = this.state.items;
    if (this.state.filter !== "") {
      items = this.state.items.filter((item) => {
        return item.type === this.state.filter;
      });
    }
    // mixer would really be part of the component (this.mixer)
    window.mixer.dataset(items);
  },

  applyFilter(filter) {
    this.setState({ filter }, this.renderItems);
  },

  render() {
    return (
      <div>
        <h2>Filters</h2>
        <button type="button" onClick={this.applyFilter.bind(this, "")}>
          Show all
        </button>
        <button
          type="button"
          onClick={this.applyFilter.bind(this, "ecommerce")}
        >
          Show ecommerce
        </button>
        <button type="button" onClick={this.applyFilter.bind(this, "intranet")}>
          Show intranets
        </button>
      </div>
    );
  },
});

ReactDOM.render(<Filters />, document.getElementById("filters"));

const renderItem = (item) => {
  return `<li data-ref="item">${item.title}</li>`;
};
const mixer = mixitup(document.getElementById("items"), {
  data: { uidKey: "id" },
  render: { target: renderItem },
  selectors: {
    target: '[data-ref="item"]',
  },
});
window.mixer = mixer;

function Gallery() {
  return (
    <gallery>
      <h1>Gallery Section</h1>
      <div id="filters"></div>

<olw id="items"></div>
    </gallery>
  );
}

export default Gallery;
