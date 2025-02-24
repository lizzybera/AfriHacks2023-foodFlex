import { AiOutlineClose } from "react-icons/ai";

const SeekLoanScreen = () => {
  const validInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };
  return (
    <>
      <div className=" w-[100%] h-[100vh] flex justify-center items-center bg-slate-200">
        <div className="bg-white w-[450px] flex flex-col items-center justify-center relative min-h-[200px] rounded-lg p-5">
          <AiOutlineClose
            size={20}
            color="grey"
            className="absolute cursor-pointer top-3 right-3"
          />
          <div className="font-Bold text-[25px] text-red-500 ">Seek Loan</div>
          <div className="text-[11px] text-gray-500 font-medium text-center w-[80%] ">
            Navigating the Food Flex App, users seelessly explore loan options,
            turniong grocerys shoping into a stress-free, personalized
            experienced that blends financial flexibility with culinary
            convinence.
          </div>
          <div className="mt-[15px] font-Bold text-gray-500 text-[13px] text-center">
            LOAN AMOUNT CREDENTIAL
          </div>
          <div className="w-[200px] flex justify-center items-center text-[20px] text-gray-500 h-[50px] border rounded-md">
            ₦{" "}
            <input
              type="text"
              onInput={validInput}
              maxLength={5}
              className="w-[70%] h-[40px] outline-none pl-3"
            />
            .00
          </div>
          <div className="w-[200px] mt-[10px] h-[45px] text-[white] bg-red-500 rounded flex justify-center items-center font-light text-[13px] cursor-pointer hover:scale-[1.02] transition-all duration-700 overflow-hidden ">
            Proceed Request
          </div>
          <div className=" w-[100%] mt-[20px] flex justify-center items-center font-semibold text-red-500 ">
            <div className="text-[11px] ">Note:</div>
            <div className="text-[11px]   ">
              You can only borrow up to ₦50,000.00
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeekLoanScreen;
