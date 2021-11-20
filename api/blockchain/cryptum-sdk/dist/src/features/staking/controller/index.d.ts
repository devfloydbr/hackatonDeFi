export = StakingController;
declare class StakingController extends Interface {
    celo(): CeloStakingController;
}
import Interface = require("./interface");
import CeloStakingController = require("./celo");
