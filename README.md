[DEMO](https://official-artem.github.io/input-components/?path=/story/inputannotation--default)

# 🚀 Test Task: UI Components Library

Welcome to the UI Components Library test task! This project demonstrates a set of reusable, customizable UI components built with React and styled-components, designed to be modular, scalable, and easy to integrate into any project. The components are developed to be used as part of a design system or component library.

## 📋 Task Overview
The objective of this task is to develop several UI components based on a provided design. The components should be designed as if they are part of an independent library, ready to be used in an unknown project. All state management should be handled outside of the components, ensuring they are purely functional.

## Components to Develop:
- InputText: A customizable text input field with optional icons and error states.
- InputLabel: A label component for form elements, with support for icons and tooltips.
- InputGroup: A wrapper component for grouping input-related elements with consistent styling and layout.
- InputAnnotation: A text annotation component for displaying additional information or validation messages.
- 
## ✨ Key Features
- Modular Design: Each component is designed to be independent and reusable, following best practices for component-based architecture.
- Customizable Props: The components accept a variety of props to control styling, behavior, and content, making them flexible and adaptable.
- Error Handling: Built-in support for error states, with customizable colors and styles for error messages.
- Responsive: Components are designed to be responsive, ensuring they work well on different screen sizes.
- Theming: Easily customizable colors, fonts, and sizes through props, allowing for consistent theming across the application.

## 🚀 Getting Started
To get started with the project, follow these steps:

### Clone the Repository:

```bash
git clone https://github.com/yourusername/ui-components-test-task.git
cd ui-components-test-task
```

### Install Dependencies:

```bash
npm install

```

### Run the Project:

```bash
npm start
```

### Run Storybook:

Storybook has been set up to preview and test components.

bash
```bash
npm run storybook
```

## 📚 Storybook
Storybook has been used to create interactive documentation for each component. You can explore various states, sizes, and configurations of the components. It provides an isolated environment to test and experiment with component properties.

- #### How to Use:

- Start Storybook using the command npm run storybook.
- Navigate to http://localhost:6006 in your browser to explore the components.

## 🧩 Component Details
### InputText
#### Props:
- placeholder: Placeholder text for the input.
- leftIcon, rightIcon, lastIcon: Optional icons to be displayed inside the input field.
- isDisabled: Disable the input field.
- isError: Indicate an error state with custom styles.

### InputLabel
#### Props:
- title: The text label for the input field.
- htmlFor: The id of the input element this label is associated with.
- icon: Optional icon to be displayed with the label.
- tooltipText: Text for an optional tooltip.
tooltipPosition: Position of the tooltip (e.g., 'top', 'bottom').

### InputGroup
#### Props:
- children: Components to be wrapped inside the group.
- gap: Space between child elements.

### InputAnnotation
#### Props:
- text: The annotation text.
- isError: Style the annotation as an error message.
- isDisabled: Style the annotation as disabled.
- color: Custom color for the text.
- size: Size of the annotation text.

## 🛠️ Technologies Used
- React: JavaScript library for building user interfaces.
- Styled-Components: CSS-in-JS library for styling components.
- TypeScript: Type-safe JavaScript with added type annotations.
- Storybook: Tool for building UI components in isolation.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check out the issues page.
