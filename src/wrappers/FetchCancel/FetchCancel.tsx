import React from 'react';

export interface FetchCancelContextInterface {
  abortController: AbortController;
  updateAbort: () => void;
}

export const FetchCancelContext: React.Context<FetchCancelContextInterface> = React.createContext(
  {} as FetchCancelContextInterface,
);

class FetchCancel extends React.PureComponent<
  {},
  { abortController: AbortController }
> {
  constructor(props: any) {
    super(props);

    this.state = { abortController: new AbortController() };
  }

  componentWillUnmount(): void {
    const { abortController } = this.state;
    abortController.abort();
  }

  render() {
    const { children } = this.props;
    const { abortController } = this.state;
    return (
      <FetchCancelContext.Provider
        value={{
          abortController,
          updateAbort: () =>
            this.setState({ abortController: new AbortController() }),
        }}
      >
        {children}
      </FetchCancelContext.Provider>
    );
  }
}

export default FetchCancel;
