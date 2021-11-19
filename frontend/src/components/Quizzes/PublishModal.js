import { useEffect } from "react";

const PublishModal = ({showModal, setShowModal, newQuestions, quiz}) => {

  useEffect(() => {
    console.log(newQuestions, quiz)
    const closeMenu = () => {
      setShowModal(false);
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showModal]);
  return (
    <div className="publish-modal" onClick={e => e.stopPropagation()}>
        {(newQuestions.length < 2 &&
          <div> You must submit at least 2 questions.</div>
          )}
    </div>
  )
}

export default PublishModal
