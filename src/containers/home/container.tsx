import { useStore } from '@nanostores/react';
import { Button } from 'components/Button/Button';
import { LayoutBlock } from 'components/Layout/LayoutBlock';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from 'src/ErrorBoundary';
import { $global, updateGlobal } from 'store/global';
import { RootState } from 'store/redux-store';
import { Global } from 'types/types';

import { decrement, increment } from './counterSlice';

const HomeContainer = () => {
    const global = useStore($global);

    const handleClick = () => {
        const obj = {
            ...global,
            isSomethingGoingOn: !global.isSomethingGoingOn,
        } as Global;

        updateGlobal(obj);
    };

    const count = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    return (
        <LayoutBlock align="stretch" isScrollable={true}>
            <p>hello world</p>
            <Button onClick={handleClick} text="Click me" />
            <p>
                Is something going on?
                {global.isSomethingGoingOn ? 'Yes!' : 'No :('}
            </p>
            <div>
                <Button onClick={() => dispatch(increment())} text="+" />
                <Button onClick={() => dispatch(decrement())} text="-" />
                {count}
            </div>
        </LayoutBlock>
    );
};

export function HomeContainerErrorBoundary(props: any) {
    return (
        <ErrorBoundary>
            <HomeContainer {...props} />
        </ErrorBoundary>
    );
}
