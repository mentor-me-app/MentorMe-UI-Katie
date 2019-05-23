class Faq {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.element = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.element.querySelector(".expandButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", event => this.expandArticle());
  }

  expandArticle(event) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    this.element.classList.toggle("faq-open");

    //toggles button to shrink and expand
    if (this.element.classList.contains("faq-open")) {
      this.expandButton.textContent = "expand";
    } else {
      this.expandButton.textContent = "shrink";
    }
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll(".faq");

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map(article => new Faq(article));
