import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import OBJLoader from 'three-obj-loader';
import Dimensions from 'react-dimensions';
import styled from 'styled-components';

const OrbitControls = require('three-orbit-controls')(THREE);
OBJLoader(THREE);

const StyledSceneWrap = styled.div`
  &:hover {
    cursor: ${props => (props.dragging === true ? 'grabbing' : 'grab')};
  }
`;

class HeadScene extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cameraPosition: new THREE.Vector3(0, 0, 30)
    };

    this._onAnimate = () => {
      this.controls.update();
    };
  }

  componentDidMount() {
    const { group, camera } = this.refs;

    const controls = new OrbitControls(camera);
    controls.enableDamping = true;
    controls.dampingFactor = 0.4;
    controls.rotateSpeed = 0.6;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.enableKeys = false;
    this.controls = controls;

    this.controls.addEventListener('start', () => {
      this.setState({
        dragging: true
      });
    });

    this.controls.addEventListener('end', () => {
      this.setState({
        dragging: false
      });
    });

    const objLoader = new THREE.OBJLoader();
    objLoader.load('/head-modified.obj', obj => {
      obj.traverse(child => {
        if (child instanceof THREE.Mesh) {
          // child.geometry.computeVertexNormals();
          child.material = new THREE.MeshNormalMaterial({
            side: THREE.DoubleSide,
            wireframe: false,
            flatShading: false,
            morphTargets: false
          });
        }
      });

      const scalar = 11;
      obj.scale.set(scalar, scalar, scalar);
      obj.rotation.set(Math.PI * -0.05, Math.PI * 0, Math.PI * 0);
      group.add(obj);
    });
  }

  componentWillUnmount() {
    this.refs.scene.remove(this.refs.group);

    this.controls.dispose();
    delete this.controls;
  }

  render() {
    const width = this.props.containerWidth;
    const height = this.props.containerHeight;

    const { dragging, cameraPosition } = this.state;

    return (
      <StyledSceneWrap dragging={dragging}>
        <React3
          mainCamera="mainCamera"
          width={width}
          height={height}
          onAnimate={this._onAnimate}
          clearColor={0xffffff}
          antialias
          pixelRatio={window.devicePixelRatio}>
          <scene ref="scene">
            <perspectiveCamera
              name="mainCamera"
              ref="camera"
              fov={50}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={cameraPosition}
            />

            <group ref="group" />
          </scene>
        </React3>
      </StyledSceneWrap>
    );
  }
}

export default Dimensions()(HeadScene);