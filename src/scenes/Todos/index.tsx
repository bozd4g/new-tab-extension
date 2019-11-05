import React from 'react';
import Layout from '../../components/Layout';
import './index.scss';

interface ITodosProps {}

interface ITodosState {}

class Todos extends React.Component<ITodosProps, ITodosState> {
   constructor(props: ITodosProps) {
      super(props);
   }

   render() {
      return (
         <Layout>
            <h1>Hellow from New Tab Chrome & Mozilla Extension</h1>
         </Layout>
      );
   }
}

export default Todos;
