// Generated from tnsnames.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('js/lib/antlr4/index');


var alias = "";


// This class defines a complete listener for a parse tree produced by tnsnamesParser.
function tnsnamesListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

tnsnamesListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
tnsnamesListener.prototype.constructor = tnsnamesListener;



function baseListener(ctx){

    var rule = tns.parser.ruleNames[ctx.ruleIndex];

    /*
    console.log('Rule:', rule, ctx);
    console.log('--------------------');
    */

    if(ctx.children){

        var value = "";

        angular.forEach(ctx.children, function(item, index){
            if(item.symbol){
                value += item.symbol.text;
            }

            // We trap the endlines for completed tnsnames
            if(rule == 'tnsnames' && item.start && item.stop){

                var tnsnamesAlias = item.start.text;
                if(tns.entries[tnsnamesAlias]){
                    tns.entries[tnsnamesAlias].endLine = item.stop.line;
                    tns.entries[tnsnamesAlias].startLine = item.start.line;
                }
            }

        });

        // todo(bwills): wondering if this could be done with rule index 0?
        if(value.length){

            if(rule == 'alias' && alias != value){
                alias = value;
            }

            tns.entries[alias] = tns.entries[alias] || {};
            tns.entries[alias][rule] = tns.entries[alias][rule] || [];
            tns.entries[alias][rule].push(value);
        }
    }
}





// Enter a parse tree produced by tnsnamesParser#tnsnames.
tnsnamesListener.prototype.enterTnsnames = function(ctx) {

    console.log('enter:', ctx);
    console.log('--------------------');
};

// Exit a parse tree produced by tnsnamesParser#tnsnames.
tnsnamesListener.prototype.exitTnsnames = function(ctx) {
    console.log('exit:', ctx);
    console.log('--------------------');
    baseListener(ctx); 
};


// Enter a parse tree produced by tnsnamesParser#tns_entry.
tnsnamesListener.prototype.enterTns_entry = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tns_entry.
tnsnamesListener.prototype.exitTns_entry = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ifile.
tnsnamesListener.prototype.enterIfile = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ifile.
tnsnamesListener.prototype.exitIfile = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#lsnr_entry.
tnsnamesListener.prototype.enterLsnr_entry = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#lsnr_entry.
tnsnamesListener.prototype.exitLsnr_entry = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#lsnr_description.
tnsnamesListener.prototype.enterLsnr_description = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#lsnr_description.
tnsnamesListener.prototype.exitLsnr_description = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#alias_list.
tnsnamesListener.prototype.enterAlias_list = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#alias_list.
tnsnamesListener.prototype.exitAlias_list = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#alias.
tnsnamesListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#alias.
tnsnamesListener.prototype.exitAlias = function(ctx) {
baseListener(ctx); 
};


// Enter a parse tree produced by tnsnamesParser#description_list.
tnsnamesListener.prototype.enterDescription_list = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#description_list.
tnsnamesListener.prototype.exitDescription_list = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#dl_params.
tnsnamesListener.prototype.enterDl_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#dl_params.
tnsnamesListener.prototype.exitDl_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#dl_parameter.
tnsnamesListener.prototype.enterDl_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#dl_parameter.
tnsnamesListener.prototype.exitDl_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#description.
tnsnamesListener.prototype.enterDescription = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#description.
tnsnamesListener.prototype.exitDescription = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_params.
tnsnamesListener.prototype.enterD_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_params.
tnsnamesListener.prototype.exitD_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_parameter.
tnsnamesListener.prototype.enterD_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_parameter.
tnsnamesListener.prototype.exitD_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_enable.
tnsnamesListener.prototype.enterD_enable = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_enable.
tnsnamesListener.prototype.exitD_enable = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_sdu.
tnsnamesListener.prototype.enterD_sdu = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_sdu.
tnsnamesListener.prototype.exitD_sdu = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_recv_buf.
tnsnamesListener.prototype.enterD_recv_buf = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_recv_buf.
tnsnamesListener.prototype.exitD_recv_buf = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_send_buf.
tnsnamesListener.prototype.enterD_send_buf = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_send_buf.
tnsnamesListener.prototype.exitD_send_buf = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_service_type.
tnsnamesListener.prototype.enterD_service_type = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_service_type.
tnsnamesListener.prototype.exitD_service_type = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_security.
tnsnamesListener.prototype.enterD_security = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_security.
tnsnamesListener.prototype.exitD_security = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_conn_timeout.
tnsnamesListener.prototype.enterD_conn_timeout = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_conn_timeout.
tnsnamesListener.prototype.exitD_conn_timeout = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_retry_count.
tnsnamesListener.prototype.enterD_retry_count = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_retry_count.
tnsnamesListener.prototype.exitD_retry_count = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#d_tct.
tnsnamesListener.prototype.enterD_tct = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#d_tct.
tnsnamesListener.prototype.exitD_tct = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ds_parameter.
tnsnamesListener.prototype.enterDs_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ds_parameter.
tnsnamesListener.prototype.exitDs_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#address_list.
tnsnamesListener.prototype.enterAddress_list = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#address_list.
tnsnamesListener.prototype.exitAddress_list = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#al_params.
tnsnamesListener.prototype.enterAl_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#al_params.
tnsnamesListener.prototype.exitAl_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#al_parameter.
tnsnamesListener.prototype.enterAl_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#al_parameter.
tnsnamesListener.prototype.exitAl_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#al_failover.
tnsnamesListener.prototype.enterAl_failover = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#al_failover.
tnsnamesListener.prototype.exitAl_failover = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#al_load_balance.
tnsnamesListener.prototype.enterAl_load_balance = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#al_load_balance.
tnsnamesListener.prototype.exitAl_load_balance = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#al_source_route.
tnsnamesListener.prototype.enterAl_source_route = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#al_source_route.
tnsnamesListener.prototype.exitAl_source_route = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#address.
tnsnamesListener.prototype.enterAddress = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#address.
tnsnamesListener.prototype.exitAddress = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#a_params.
tnsnamesListener.prototype.enterA_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#a_params.
tnsnamesListener.prototype.exitA_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#a_parameter.
tnsnamesListener.prototype.enterA_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#a_parameter.
tnsnamesListener.prototype.exitA_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#protocol_info.
tnsnamesListener.prototype.enterProtocol_info = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#protocol_info.
tnsnamesListener.prototype.exitProtocol_info = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#tcp_protocol.
tnsnamesListener.prototype.enterTcp_protocol = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tcp_protocol.
tnsnamesListener.prototype.exitTcp_protocol = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#tcp_params.
tnsnamesListener.prototype.enterTcp_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tcp_params.
tnsnamesListener.prototype.exitTcp_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#tcp_parameter.
tnsnamesListener.prototype.enterTcp_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tcp_parameter.
tnsnamesListener.prototype.exitTcp_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#tcp_host.
tnsnamesListener.prototype.enterTcp_host = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tcp_host.
tnsnamesListener.prototype.exitTcp_host = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#tcp_port.
tnsnamesListener.prototype.enterTcp_port = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tcp_port.
tnsnamesListener.prototype.exitTcp_port = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#tcp_tcp.
tnsnamesListener.prototype.enterTcp_tcp = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#tcp_tcp.
tnsnamesListener.prototype.exitTcp_tcp = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#host.
tnsnamesListener.prototype.enterHost = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#host.
tnsnamesListener.prototype.exitHost = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#port.
tnsnamesListener.prototype.enterPort = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#port.
tnsnamesListener.prototype.exitPort = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ipc_protocol.
tnsnamesListener.prototype.enterIpc_protocol = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ipc_protocol.
tnsnamesListener.prototype.exitIpc_protocol = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ipc_params.
tnsnamesListener.prototype.enterIpc_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ipc_params.
tnsnamesListener.prototype.exitIpc_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ipc_parameter.
tnsnamesListener.prototype.enterIpc_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ipc_parameter.
tnsnamesListener.prototype.exitIpc_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ipc_ipc.
tnsnamesListener.prototype.enterIpc_ipc = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ipc_ipc.
tnsnamesListener.prototype.exitIpc_ipc = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ipc_key.
tnsnamesListener.prototype.enterIpc_key = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ipc_key.
tnsnamesListener.prototype.exitIpc_key = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#spx_protocol.
tnsnamesListener.prototype.enterSpx_protocol = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#spx_protocol.
tnsnamesListener.prototype.exitSpx_protocol = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#spx_params.
tnsnamesListener.prototype.enterSpx_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#spx_params.
tnsnamesListener.prototype.exitSpx_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#spx_parameter.
tnsnamesListener.prototype.enterSpx_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#spx_parameter.
tnsnamesListener.prototype.exitSpx_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#spx_spx.
tnsnamesListener.prototype.enterSpx_spx = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#spx_spx.
tnsnamesListener.prototype.exitSpx_spx = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#spx_service.
tnsnamesListener.prototype.enterSpx_service = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#spx_service.
tnsnamesListener.prototype.exitSpx_service = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#nmp_protocol.
tnsnamesListener.prototype.enterNmp_protocol = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#nmp_protocol.
tnsnamesListener.prototype.exitNmp_protocol = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#nmp_params.
tnsnamesListener.prototype.enterNmp_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#nmp_params.
tnsnamesListener.prototype.exitNmp_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#nmp_parameter.
tnsnamesListener.prototype.enterNmp_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#nmp_parameter.
tnsnamesListener.prototype.exitNmp_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#nmp_nmp.
tnsnamesListener.prototype.enterNmp_nmp = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#nmp_nmp.
tnsnamesListener.prototype.exitNmp_nmp = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#nmp_server.
tnsnamesListener.prototype.enterNmp_server = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#nmp_server.
tnsnamesListener.prototype.exitNmp_server = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#nmp_pipe.
tnsnamesListener.prototype.enterNmp_pipe = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#nmp_pipe.
tnsnamesListener.prototype.exitNmp_pipe = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_protocol.
tnsnamesListener.prototype.enterBeq_protocol = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_protocol.
tnsnamesListener.prototype.exitBeq_protocol = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_params.
tnsnamesListener.prototype.enterBeq_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_params.
tnsnamesListener.prototype.exitBeq_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_parameter.
tnsnamesListener.prototype.enterBeq_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_parameter.
tnsnamesListener.prototype.exitBeq_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_beq.
tnsnamesListener.prototype.enterBeq_beq = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_beq.
tnsnamesListener.prototype.exitBeq_beq = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_program.
tnsnamesListener.prototype.enterBeq_program = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_program.
tnsnamesListener.prototype.exitBeq_program = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_argv0.
tnsnamesListener.prototype.enterBeq_argv0 = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_argv0.
tnsnamesListener.prototype.exitBeq_argv0 = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#beq_args.
tnsnamesListener.prototype.enterBeq_args = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#beq_args.
tnsnamesListener.prototype.exitBeq_args = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ba_parameter.
tnsnamesListener.prototype.enterBa_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ba_parameter.
tnsnamesListener.prototype.exitBa_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#ba_description.
tnsnamesListener.prototype.enterBa_description = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#ba_description.
tnsnamesListener.prototype.exitBa_description = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#bad_params.
tnsnamesListener.prototype.enterBad_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#bad_params.
tnsnamesListener.prototype.exitBad_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#bad_parameter.
tnsnamesListener.prototype.enterBad_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#bad_parameter.
tnsnamesListener.prototype.exitBad_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#bad_local.
tnsnamesListener.prototype.enterBad_local = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#bad_local.
tnsnamesListener.prototype.exitBad_local = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#bad_address.
tnsnamesListener.prototype.enterBad_address = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#bad_address.
tnsnamesListener.prototype.exitBad_address = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#connect_data.
tnsnamesListener.prototype.enterConnect_data = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#connect_data.
tnsnamesListener.prototype.exitConnect_data = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_params.
tnsnamesListener.prototype.enterCd_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_params.
tnsnamesListener.prototype.exitCd_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_parameter.
tnsnamesListener.prototype.enterCd_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_parameter.
tnsnamesListener.prototype.exitCd_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_service_name.
tnsnamesListener.prototype.enterCd_service_name = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_service_name.
tnsnamesListener.prototype.exitCd_service_name = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_sid.
tnsnamesListener.prototype.enterCd_sid = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_sid.
tnsnamesListener.prototype.exitCd_sid = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_instance_name.
tnsnamesListener.prototype.enterCd_instance_name = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_instance_name.
tnsnamesListener.prototype.exitCd_instance_name = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_failover_mode.
tnsnamesListener.prototype.enterCd_failover_mode = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_failover_mode.
tnsnamesListener.prototype.exitCd_failover_mode = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_global_name.
tnsnamesListener.prototype.enterCd_global_name = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_global_name.
tnsnamesListener.prototype.exitCd_global_name = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_hs.
tnsnamesListener.prototype.enterCd_hs = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_hs.
tnsnamesListener.prototype.exitCd_hs = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_rdb_database.
tnsnamesListener.prototype.enterCd_rdb_database = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_rdb_database.
tnsnamesListener.prototype.exitCd_rdb_database = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_server.
tnsnamesListener.prototype.enterCd_server = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_server.
tnsnamesListener.prototype.exitCd_server = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#cd_ur.
tnsnamesListener.prototype.enterCd_ur = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#cd_ur.
tnsnamesListener.prototype.exitCd_ur = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_params.
tnsnamesListener.prototype.enterFo_params = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_params.
tnsnamesListener.prototype.exitFo_params = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_parameter.
tnsnamesListener.prototype.enterFo_parameter = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_parameter.
tnsnamesListener.prototype.exitFo_parameter = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_type.
tnsnamesListener.prototype.enterFo_type = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_type.
tnsnamesListener.prototype.exitFo_type = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_backup.
tnsnamesListener.prototype.enterFo_backup = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_backup.
tnsnamesListener.prototype.exitFo_backup = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_method.
tnsnamesListener.prototype.enterFo_method = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_method.
tnsnamesListener.prototype.exitFo_method = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_retries.
tnsnamesListener.prototype.enterFo_retries = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_retries.
tnsnamesListener.prototype.exitFo_retries = function(ctx) {
baseListener(ctx); };


// Enter a parse tree produced by tnsnamesParser#fo_delay.
tnsnamesListener.prototype.enterFo_delay = function(ctx) {
};

// Exit a parse tree produced by tnsnamesParser#fo_delay.
tnsnamesListener.prototype.exitFo_delay = function(ctx) {
baseListener(ctx); };



exports.tnsnamesListener = tnsnamesListener;
