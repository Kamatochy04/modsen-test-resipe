import { Spinner } from '.';

type Props = {
    className?: string;
};

const Loader = ({ className }: Props) => {
    return <Spinner className={className} />;
};

export default Loader;
