import React from 'react';
import '../../assets/scss/global.scss';

interface ILayoutProps {}

class Layout extends React.Component<ILayoutProps> {
   constructor(props: ILayoutProps) {
      super(props);
   }

   render() {
      return <div>{this.props.children}</div>;
   }
}

export default Layout;
