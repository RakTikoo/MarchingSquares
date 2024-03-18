export const renderShader = /* wgsl */`
// Your shader code will go here
struct VertexInput {
    @location(0) pos: vec2f,
    @builtin(instance_index) instance: u32,
  };
  struct VertexOutput {
    @builtin(position) pos: vec4f,
    @location(0) cell: vec2f,
    @location(1) state: f32,
  };
  struct FragInput {
    @location(0) cell: vec2f,
    @location(1) state: f32,
  };

  // Create the appropriate marching square case based on the input state
  fn State2Pos(pos: vec2f, state: i32) -> vec2f {
    var newPos = pos;
    //var gridState = (state3*8.0 + state2*4.0 + state1*2.0 + state0*1.0);
    var finalPos : i32 = i32(state);
    switch(finalPos) {
        case 0: {
            newPos.x = 0.0;
            newPos.y = 0.0;
        }
        case 1: {
            if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == 0.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == 0.0) {
                newPos.x = -1.0;
                newPos.y = 0.0;
              }
        }
        case 2: {
            if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == 0.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == 0.0) {
                newPos.x = 1.0;
                newPos.y = 0.0;
              }
        }
        case 3: {
            if(newPos.x == 0.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
            }
        }
        case 4: {
            if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == 0.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == 0.0) {
                newPos.x = 1.0;
                newPos.y = 0.0;
              }
        }
        case 5: {
            if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 1.0;
                newPos.y = 0.0;
            }
            if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = -1.0;
                newPos.y = 0.0;
            }
        }
        case 6: {
            if(newPos.x == -1.0 && newPos.y == 0.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
            } 
        }
        case 7: {
            if(newPos.x == -1.0 && newPos.y == 1.0) {
                newPos.x = -1.0;
                newPos.y = 0.0;
            }
        }
        case 8: {
            if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == 0.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 0.0 && newPos.y == 0.0) {
                newPos.x = -1.0;
                newPos.y = 0.0;
              }
        }
        case 9: {
            if(newPos.x == 1.0 && newPos.y == 0.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
            } 
        }
        case 10: {
            if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 1.0;
                newPos.y = 0.0;
            }
            if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = -1.0;
                newPos.y = 0.0;
              }
        }
        case 11: {
            if(newPos.x == 1.0 && newPos.y == 1.0) {
                newPos.x = 1.0;
                newPos.y = 0.0;
            }
        }
        case 12: {
            if(newPos.x == 0.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
              }
              if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 0.0;
                newPos.y = 0.0;
            }
        }
        case 13: {
            if(newPos.x == 1.0 && newPos.y == -1.0) {
                newPos.x = 1.0;
                newPos.y = 0.0;
            }
        }
        case 14: {
            if(newPos.x == -1.0 && newPos.y == -1.0) {
                newPos.x = -1.0;
                newPos.y = 0.0;
              }
        }
        case 15: {
            
        }
        default: {

        }
    };


    return newPos;
  };

  //struct state_vals {
  //  state3 : i32,
  //  state2 : i32,
  //  state1 : i32,
  //  state0 : i32,
  //}
  // At the top of the code string in the createShaderModule() call
  @group(0) @binding(0) var<uniform> grid: vec2f;
  @group(0) @binding(1) var<storage> cellState: array<f32>;
  @vertex
  fn vertexMain(input: VertexInput) -> VertexOutput {
      let i = f32(input.instance); // Save the instance_index as a float

      // Compute the cell coordinate from the instance_index
      let cell = vec2f(i % grid.x, floor(i / grid.x));
      
      let state = f32(cellState[input.instance]);
      var i_state: i32 = i32(state);
      var newPos = State2Pos(input.pos, i_state); // Set to 15 to get a square
    
      let cellOffset = cell / grid * 2; // Compute the offset to cell
      // Add 1 to the position before dividing by the grid size.
      // Subtract 1 after dividing by the grid size.
      let gridPos = (newPos+1) / grid - 1 + cellOffset;
      

      var output: VertexOutput;
      output.pos = vec4f(gridPos, 0, 1);

      output.cell = cell;
      output.state = state;
      return output;
  }
  
  @fragment
  fn fragmentMain(input: FragInput) -> @location(0) vec4f {
      // Random Shader logic to create landscape ish pattern    
      var c = vec3f(0.0, 0.0, 0.0);
      let sea_level : f32 = 16/3;
      let mountain_level : f32 = 16/1.5;

      if(input.state <= sea_level) {
        c.x = 0.0;
        c.y = input.state/16.0;
        c.z = 1.0 - input.state/16.0;
      }  
      if(input.state < mountain_level && input.state > sea_level) {
        c.x = 0.0;
        c.y = 1.0 - input.state/16.0;
        c.z = 0.0;
      }  
      if(input.state >= mountain_level) {
        c.x = input.state/16.0;
        c.y = input.state/16.0;
        c.z = input.state/16.0;
      }   

      return vec4f(c, 1.0); // (Red, Green, Blue, Alpha)
  }
`

