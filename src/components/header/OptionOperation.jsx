import LIMIT_NUMBER from "../../consts/LIMIT_NUMBER";
import OPTION_OPERATION from "../../consts/OPTION_OPERATION";
const OptionOperation = ({ onOptions, options,openOption }) => {
  return (
    <>

     {openOption && <div className="options">
        <div className="options-item">
          <span className="option-text">Adult</span>
          <div className="option-counter">
            <button
              disabled={options.adult <= LIMIT_NUMBER.adult}
              className="option-counter-btn"
              onClick={() => {
                onOptions(OPTION_OPERATION.ADULT, OPTION_OPERATION.MINUS);
              }}
            >
              -
            </button>
            <span className="option-counter-num">{options.adult}</span>
            <button
              className="option-counter-btn"
              onClick={() =>
                onOptions(OPTION_OPERATION.ADULT, OPTION_OPERATION.ADD)
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="options-item">
          <span className="option-text">Children</span>
          <div className="option-counter">
            <button
              disabled={options.children <= LIMIT_NUMBER.children}
              className="option-counter-btn"
              onClick={() =>
                onOptions(OPTION_OPERATION.CHILDREN, OPTION_OPERATION.MINUS)
              }
            >
              -
            </button>
            <span className="option-counter-num">{options.children}</span>
            <button
              className="option-counter-btn"
              onClick={() =>
                onOptions(OPTION_OPERATION.CHILDREN, OPTION_OPERATION.ADD)
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="options-item">
          <span className="option-text">Room</span>
          <div className="option-counter">
            <button
              disabled={options.room <= LIMIT_NUMBER.room}
              className="option-counter-btn"
              onClick={() =>
                onOptions(OPTION_OPERATION.ROOM, OPTION_OPERATION.MINUS)
              }
            >
              -
            </button>
            <span className="option-counter-num">{options.room}</span>
            <button
              className="option-counter-btn"
              onClick={() =>
                onOptions(OPTION_OPERATION.ROOM, OPTION_OPERATION.ADD)
              }
            >
              +
            </button>
          </div>
        </div>
      </div>}
    </>
  );
};

export default OptionOperation;
