import { GeoLayoutInstance as Geo } from "../../engine/GeoLayout"
import { GEO_ANIMATED_PART, GEO_OPEN_NODE, GEO_ASM, GEO_ROTATION_NODE, GEO_CLOSE_NODE, GEO_BRANCH, GEO_RETURN, LAYER_OPAQUE, GEO_SCALE, GEO_DISPLAY_LIST } from "../../engine/GeoLayout"
import { 
    mario_nameplate,
    mario_butt, 
    mario_torso, 
    mario_cap_on_eyes_front,
    mario_cap_on_eyes_half_closed,
    mario_cap_on_eyes_closed,
    mario_cap_off_eyes_front,
    mario_cap_off_eyes_half_closed,
    mario_cap_off_eyes_closed,
    mario_left_arm,
    mario_left_forearm_shared_dl,
    mario_left_hand_closed,
    mario_right_arm,
    mario_right_forearm_shared_dl,
    mario_right_hand_closed,
    mario_left_thigh,
    mario_left_leg_shared_dl,
    mario_left_foot,
    mario_right_thigh,
    mario_right_leg_shared_dl,
    mario_right_foot,
    mario_medium_poly_butt,
    mario_medium_poly_torso,
    mario_medium_poly_left_arm,
    mario_medium_poly_left_forearm_shared_dl,
    mario_medium_poly_left_hand_closed,
    mario_medium_poly_right_arm,
    mario_medium_poly_right_forearm_shared_dl,
    mario_medium_poly_right_hand_closed,
    mario_medium_poly_left_thigh,
    mario_medium_poly_left_leg_shared_dl,
    mario_medium_poly_left_foot,
    mario_medium_poly_right_thigh,
    mario_medium_poly_right_leg_shared_dl,
    mario_medium_poly_right_foot,
    mario_low_poly_butt,
    mario_low_poly_torso,
    mario_low_poly_left_arm,
    mario_low_poly_left_forearm_shared_dl,
    mario_low_poly_left_hand_closed,
    mario_low_poly_right_arm,
    mario_low_poly_right_forearm_shared_dl,
    mario_low_poly_right_hand_closed,
    mario_low_poly_left_thigh,
    mario_low_poly_left_leg_shared_dl,
    mario_low_poly_left_foot,
    mario_low_poly_right_thigh,
    mario_low_poly_right_leg_shared_dl,
    mario_low_poly_right_foot,
    mario_low_poly_cap_on_eyes_front,
    mario_low_poly_cap_on_eyes_half_closed,
    mario_low_poly_cap_on_eyes_closed,
    mario_low_poly_cap_off_eyes_front,
    mario_low_poly_cap_off_eyes_half_closed,
    mario_low_poly_cap_off_eyes_closed,
} from "./mario.inc"
import { parachute_DL, parachute_off_DL } from "../parachute/model.inc"
import { kart_DL, kart_off_DL } from "../kart/model.inc"
import { MarioMiscInstance as MarioMisc } from "../../game/MarioMisc"
import { SHADOW_CIRCLE_PLAYER } from "../../game/Shadow"
/*Mario*/


const mario_geo_face_and_wings = [
    { command: Geo.node_rotation, args: [0x00, 0, 0, 0] },
    { command: Geo.open_node },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_cap_on_off, MarioMisc] },
    { command: Geo.open_node },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_eyes, MarioMisc] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_cap_on_eyes_front] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_cap_on_eyes_half_closed] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_cap_on_eyes_closed] },
    { command: Geo.close_node },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_eyes, MarioMisc] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_cap_off_eyes_front] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_cap_off_eyes_half_closed] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_cap_off_eyes_closed] },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.return }
]

const mario_geo_low_poly_face_and_wings = [
    { command: Geo.node_rotation, args: [0x00, 0, 0, 0] },
    { command: Geo.open_node },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_cap_on_off, MarioMisc] },
    { command: Geo.open_node },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_eyes, MarioMisc] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_low_poly_cap_on_eyes_front] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_low_poly_cap_on_eyes_half_closed] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_low_poly_cap_on_eyes_closed] },
    { command: Geo.close_node },
    { command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_eyes, MarioMisc] },
    { command: Geo.open_node },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_low_poly_cap_off_eyes_front] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_low_poly_cap_off_eyes_half_closed] },
    { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_low_poly_cap_off_eyes_closed] },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.return }
]

const mario_geo_low_poly_body = [
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] },
    { command: Geo.open_node },
        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_low_poly_butt] },
        { command: Geo.open_node },
            // { command: Geo.node_generated, args: [ 0, geo_move_mario_part_from_parent ] },
            { command: Geo.node_generated, args: [ 0, MarioMisc.geo_mario_tilt_torso, MarioMisc ] },
            { command: Geo.node_rotation, args: [ 0x00, 0, 0, 0 ] },
            { command: Geo.open_node },
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, 0, 0, mario_low_poly_torso] },
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 87, 0, 0, null] },
                    { command: Geo.open_node },
                        { command: Geo.branch, args: [ 1, mario_geo_low_poly_face_and_wings ]},
                    { command: Geo.close_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, -10, 79, null] },  /// open mario left arm
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_low_poly_left_arm] },
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_low_poly_left_forearm_shared_dl] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_low_poly_left_hand_closed] },
                            { command: Geo.close_node },
                        { command: Geo.close_node },
                    { command: Geo.close_node },    /// close mario left arm
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, -10, -79, null] },  /// open mario left arm
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_low_poly_right_arm] },
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_low_poly_right_forearm_shared_dl] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_low_poly_right_hand_closed] },
                            { command: Geo.close_node },
                        { command: Geo.close_node },
                    { command: Geo.close_node },    /// close mario left arm
                { command: Geo.close_node },
            { command: Geo.close_node },
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, 42, null] },  /// open left leg stuff
            { command: Geo.open_node }, 
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_low_poly_left_thigh] }, 
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_low_poly_left_leg_shared_dl] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_low_poly_left_foot] }, 
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },  /// end left leg stuff
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, -42, null] },  /// open right leg stuff
            { command: Geo.open_node }, 
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_low_poly_right_thigh] }, 
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_low_poly_right_leg_shared_dl] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_low_poly_right_foot] }, 
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },  /// end right leg stuff
        { command: Geo.close_node },
    { command: Geo.close_node }
]

const mario_geo_medium_poly_body = [
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] },
    { command: Geo.open_node },
        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_medium_poly_butt] },
        { command: Geo.open_node },
            // { command: Geo.node_generated, args: [ 0, geo_move_mario_part_from_parent ] },
            { command: Geo.node_generated, args: [ 0, MarioMisc.geo_mario_tilt_torso, MarioMisc ] },
            { command: Geo.node_rotation, args: [ 0x00, 0, 0, 0 ] },
            { command: Geo.open_node },
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, 0, 0, mario_medium_poly_torso] },
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 87, 0, 0, null] },
                    { command: Geo.open_node },
                        { command: Geo.branch, args: [ 1, mario_geo_face_and_wings ]},
                    { command: Geo.close_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, -10, 79, null] },  /// open mario left arm
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_medium_poly_left_arm] },
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_medium_poly_left_forearm_shared_dl] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_medium_poly_left_hand_closed] },
                            { command: Geo.close_node },
                        { command: Geo.close_node },
                    { command: Geo.close_node },    /// close mario left arm
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, -10, -79, null] },  /// open mario left arm
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_medium_poly_right_arm] },
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_medium_poly_right_forearm_shared_dl] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_medium_poly_right_hand_closed] },
                            { command: Geo.close_node },
                        { command: Geo.close_node },
                    { command: Geo.close_node },    /// close mario left arm
                { command: Geo.close_node },
            { command: Geo.close_node },
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, 42, null] },  /// open left leg stuff
            { command: Geo.open_node }, 
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_medium_poly_left_thigh] }, 
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_medium_poly_left_leg_shared_dl] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_medium_poly_left_foot] }, 
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },  /// end left leg stuff
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, -42, null] },  /// open right leg stuff
            { command: Geo.open_node }, 
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_medium_poly_right_thigh] }, 
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_medium_poly_right_leg_shared_dl] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_medium_poly_right_foot] }, 
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },  /// end right leg stuff
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.return }
]

const mario_geo_body = [
    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, null] },
    { command: Geo.open_node },
        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_butt] },
        { command: Geo.open_node },
            // { command: Geo.node_generated, args: [ 0, MarioMisc.geo_move_mario_part_from_parent, MarioMisc] },
            { command: Geo.node_generated, args: [0, MarioMisc.geo_mario_tilt_torso, MarioMisc] },
            { command: Geo.node_rotation, args: [ 0x00, 0, 0, 0 ] },
            { command: Geo.open_node },
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, 0, 0, mario_torso] },
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 87, 0, 0, null] },
                    { command: Geo.open_node },
                        { command: Geo.branch, args: [ 1, mario_geo_face_and_wings ]},
                    { command: Geo.close_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, -10, 79, null] },  /// open mario left arm
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_left_arm] },
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_left_forearm_shared_dl] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_left_hand_closed] },
                            { command: Geo.close_node },
                        { command: Geo.close_node },
                    { command: Geo.close_node },    /// close mario left arm
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 68, -10, -79, null] },  /// open mario left arm
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_right_arm] },
                        { command: Geo.open_node },
                            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 65, 0, 0, mario_right_forearm_shared_dl] },
                            { command: Geo.open_node },
                                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 60, 0, 0, mario_right_hand_closed] },
                            { command: Geo.close_node },
                        { command: Geo.close_node },
                    { command: Geo.close_node },    /// close mario left arm
                { command: Geo.close_node },
            { command: Geo.close_node },
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, 42, null] },  /// open left leg stuff
            { command: Geo.open_node }, 
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_left_thigh] }, 
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_left_leg_shared_dl] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_left_foot] }, 
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },  /// end left leg stuff
            { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 13, -8, -42, null] },  /// open right leg stuff
            { command: Geo.open_node }, 
                { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 0, 0, 0, mario_right_thigh] }, 
                { command: Geo.open_node },
                    { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 89, 0, 0, mario_right_leg_shared_dl] }, 
                    { command: Geo.open_node },
                        { command: Geo.node_animated_part, args: [Geo.LAYER_OPAQUE, 67, 0, 0, mario_right_foot] }, 
                    { command: Geo.close_node },
                { command: Geo.close_node },
            { command: Geo.close_node },  /// end right leg stuff
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.return }
]

/*Display List*/ 

export const mario_geo_render_body = [
    { command: Geo.node_start },
    { command: Geo.open_node },
        { command: Geo.node_render_range, args: [-32767, 1000] },
        { command: Geo.open_node },
			{ command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_model, MarioMisc] },
				{ command: Geo.open_node },
					{ command: Geo.branch, args: [1, mario_geo_body ] },
					{ command: Geo.branch, args: [1, mario_geo_body ] }, //L
					{ command: Geo.branch, args: [1, mario_geo_body ] }, //W
					{ command: Geo.branch, args: [1, mario_geo_body ] }, //Y
					{ command: Geo.branch, args: [1, mario_geo_body ] }, //M
				{ command: Geo.close_node },
        { command: Geo.close_node },
        { command: Geo.node_render_range, args: [1000, 3500] },
        { command: Geo.open_node },
			{ command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_model, MarioMisc] },
				{ command: Geo.open_node },
					{ command: Geo.branch, args: [1, mario_geo_medium_poly_body ] },
					{ command: Geo.branch, args: [1, mario_geo_medium_poly_body ] }, //L
					{ command: Geo.branch, args: [1, mario_geo_medium_poly_body ] }, //W
					{ command: Geo.branch, args: [1, mario_geo_medium_poly_body ] }, //Y
					{ command: Geo.branch, args: [1, mario_geo_medium_poly_body ] }, //M
				{ command: Geo.close_node },
        { command: Geo.close_node },
        { command: Geo.node_render_range, args: [3500, 32767] },
        { command: Geo.open_node },
			{ command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_mario_model, MarioMisc] },
				{ command: Geo.open_node },
					{ command: Geo.branch, args: [1, mario_geo_low_poly_body ] },
					{ command: Geo.branch, args: [1, mario_geo_low_poly_body ] }, //L
					{ command: Geo.branch, args: [1, mario_geo_low_poly_body ] }, //W
					{ command: Geo.branch, args: [1, mario_geo_low_poly_body ] }, //Y
					{ command: Geo.branch, args: [1, mario_geo_low_poly_body ] }, //M
				{ command: Geo.close_node },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.return }
]

export const mario_geo = [
    { command: Geo.node_shadow, args: [SHADOW_CIRCLE_PLAYER, 0xB4, 100] },
    { command: Geo.open_node },
        { command: Geo.node_scale, args: [0x00, 16384] },
        { command: Geo.open_node },
			{ command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_parachuting, MarioMisc] },
				{ command: Geo.open_node },
                	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, parachute_off_DL] },
					{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, parachute_DL] },
				{ command: Geo.close_node },
			{ command: Geo.node_switch_case, args: [0, MarioMisc.geo_switch_karting, MarioMisc] },
				{ command: Geo.open_node },
                	{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, kart_off_DL] },
					{ command: Geo.display_list, args: [Geo.LAYER_OPAQUE, kart_DL] },
				{ command: Geo.close_node },
            { command: Geo.display_list, args: [Geo.LAYER_OPAQUE, mario_nameplate] },
            { command: Geo.branch, args: [1, mario_geo_render_body ] },
        { command: Geo.close_node },
    { command: Geo.close_node },
    { command: Geo.node_end }
]
