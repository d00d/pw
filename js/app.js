App = Ember.Application.create();

App.Router.map(function() {
  this.resource('rrd');
  this.resource('sa');
  this.resource('p1');
  this.resource('p2');
  this.resource('p3');
  this.resource('p4');
  this.resource('p5');
  this.resource('p6');
  this.resource('p7');
});

// --------- ******** PORTFOLIO PAST & PRESENT ************
App.RrdRoute = Ember.Route.extend ({
	model: function() {
		return ['$BRENT','$USD','$GOLD','ALS.TO','AAPL','AXL.TO','AFL','ARI','ABBV','WMT','AUY','AXS','BAX','BXE','BRI.V','BMY','CSCO','CCJ','CHL','CME','DEO','COH','DE','DIS','DSUM','ELNK','ESV','EOG','EVT','FB','FYLD','GE','GILD','GOOG','IPHYF','MFA','KERX','KKR','NGPHF','NKE','MUX','LVMUY','NUV','NOV','NEWT','MSFT','PEP','GMOM','GULTU','HTBX','TGT','LRE.L','VZ','MGNX','WEC','XLU','PLG','SCPZF','SHLD','STZ','SYY','SDRL','T','TGT','TJX','TNH','SLW','UVV','VAR','VNR','WPRT','WRB','YHOO',];
	}
});
// --------- ******** CURZIO ************
App.SaRoute = Ember.Route.extend ({
	model: function() {
		return ['RNWK','GWPH','LNN','GOGO','DGI','ARIA',,'SWKS','SAND','WPRT','DBD','RPM','BMS','UVV','LEG','LPI','TGP','MDR','TIBX','NUAN','SWKS','MRVL','ALS.TO','CRAY','CRESY','CSCO','SPN','KKR','STLD'];
	}
});
// --------- ******** SIA ************
App.P1Route = Ember.Route.extend ({
	model: function() {
		return ['JNJ','WMT','MDT','DLB','GLW','ICCC','ERIC','EMC','D','CBI','DVN','L','KMI','TGP','TRGP','OKE','OGS','CHK','SSE','ETE','NFG','APC','EXXI','NG','DRTX','UNP','FCX','NRP','HSY','ATVI','MSFT','HSBC','IMMU','MCD','LO','DO','WRB','AFG','TRV','CB','Y','AXS'];
	}
});
// --------- ******** Area 57 ************
App.P2Route = Ember.Route.extend ({
/*  model: ->
    new Ember.RSVP.Promise( (resolve, reject)->
      resolveSheet = ((sheets, tabletop)->
        Ember.run ->
          Ember.run.schedule 'actions', this, ->
            console.log 'received data', sheets
            resolve(sheets)
      )

      Tabletop.init(
        key: 'x'
        simpleSheet: false
        callback: resolveSheet
        debug: true
      )
    )*/
});
// --------- ******** LIKE NOW ************
App.P3Route = Ember.Route.extend ({
	model: function() {
		return ['$LUMBER','NAT','EWS','PICK','WY','FXI','QCOM','TNH','MFA','OXY','GILD','NKE','FB','AMZN','GOOG','CVX','VZ','CAT','PFE','SWKS','ALS.TO','MRVL','CRAY','KKR'];
	}
});
// --------- ******** Resources Sector Picks ************
App.P4Route = Ember.Route.extend ({
	model: function() {
		return ['BP','NGLS','LINE','ARLP','BBEP','NRP','IIM','JPS','CHL','BMY','AXS','BAX','AFL','GOV','JRO','UUV','COH','KKR','LTL','GMOM','GLAD','AB','JPS','BMO','FRA','AZSEY','IDV','PCL','CME','HSBC','WMT','MCD','MEMP','KO','PG','JNJ','MSFT','BDX','SYY','INTC','AAPL','EPD','DPM','WPZ','KMI','SEP','VNR'];
	}
});
// --------- ******** Hedge & Macro Indicators ************
App.P5Route = Ember.Route.extend ({
	model: function() {
		return ['$VIX','$BRENT','$USD','$GOLD','DSUM','$SILVER','$NYSI','$NASI','SPY','PSQ','SQQQ','DOG','SH','SIJ','SZK','MYY','MZZ','SDD','SBB','RWM','DBA','TBT','$VIX','GDX','$SILVER','$NYSI','$NASI','SPY','PSQ','DOG','SH','XLF','$MYY','SBB','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','$BPSPX','$BPHEAL','$BPUTIL','$BPFINA','$BPDISC','$BPSTAP','$BPINDY','$XOI','IYR','QID','DXD','SDS','MZZ','HDGE','NYY','TWM','$TICK','DUG','REW','SKF','SMN','SCC','SZK','EUM','IYR','ROM'];

	}
});
// --------- ******** DOGS of the Dow ************
App.P6Route = Ember.Route.extend ({
	model: function() {
		return ['CVX','VZ','CAT','WMT','CSCO','PFE','IBM','XOM','BA','MRK','INTC'];
	}
});
// --------- ******** Active Portoflio ************
App.P7Route = Ember.Route.extend ({
	model: function() {
		return ['AA-B','ALS.TO','AFL','ABBV','BAX','BXLT','AMZN','ARI','AXS','BMY','CSCO','CAT','DEO','DIS','FB','GE','GILD','GOOG','IPHYF','MFA','NGPHF','NKE','NUV','PEP','TGT','TNH','VZ','WEC','XLU'];
	}
});
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['AFL','APD','ARCP','AVA','BAX','BBL','BNS','BP','CLX','COP','CVX','DLR','EMR','GE','HRS','IBM','ITW','JNJ','KMI','KO','LO','MCD','MDT','MO','NSC','O','OGS','OHI','OKE','PEP','PG','PM','PSX','RDS.B','RTN','SBSI','SYY','T','TD','TGT','TIS','VOD','VZ','WFC','WMT','XOM','MSFT','INTC','STZ','CTO','FUBC','BP','RRC','KLAC','ENS','PM','CF','CPN','E','LLY','MDT','APC','BP','PM','VZ','MO','T','ABT','CRESY','CHK','CPN','FCX','KMI','PCL','SOHU','','TNH','SCCO','AFG','WRB','TRV','CB','PRA','AFSI','NG','AMH','WTW','ETE','EMC','TRGP','Y','D','WMT','HSY','IO','GOV','O','LNG','CSCO','DVA','LPI','DG','HL','NEA','IIM','NUV','NUAN','SWKS','TNH','FYLD','L','COST','SYLD','CJES','PKW','MIL','AREX','CPE','ESV','NOV','SDRL','MA','APA','EXXI','SWIR'];
  }
});