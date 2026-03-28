'use client';

import css from './Modal.module.css';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const ModalRouter = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        {/* Вміст модального вікна*/}
        {/* Тут рендериться переданий вміст із пропса children */}
        {children}
        {/* ================================================== */}
        <button onClick={close} className="backBtn">
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalRouter;
