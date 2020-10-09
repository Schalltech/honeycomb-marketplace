const css = `
  .honeycomb-cloudinary {
    display: flex;
    flex: 1 1 100%;
    max-width: 1000px;
    align-self: center;
  }

  .options {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
  }

  .option {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .color-option {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 100%;
  }

  .color-choice {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-align: center;
    width: 120px;
    border-radius: 5px;
    overflow: hidden;
    margin: 5px;
    padding: 0px;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }

  .visualizer {
    display: flex;
    padding: 0px 0px 0px 20px;
    align-items: flex-start;
  }
`;

export default css;
