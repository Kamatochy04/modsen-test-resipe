import { Component, ReactNode } from 'react';

import errorImg from '@/assets/svg/error.svg';

import { ErrorContainer, ErrorLabel } from '.';

type State = {
    hasError: boolean;
};

type Props = {
    children?: ReactNode;
};

export default class ErrorBoundary extends Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <img src={errorImg} alt="errpr" />
                    <ErrorLabel>something went wrong</ErrorLabel>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}
