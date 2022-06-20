import React from 'react';
import { connect } from 'react-redux';
import { setParol } from '../../store/Registration/action';
import Reg from './Reg';
import './Reg.css';

function RegContainer(props) {
  console.log(props);
  return (
    <Reg parol={props.parol} setParol={props.setParol} />
  );
}
const mapStateToProps = (state) => ({
  parol: state.registration.parol,
});
const mapDispatchToProps = {
  setParol,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegContainer);
