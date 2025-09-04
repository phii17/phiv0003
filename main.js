const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { SigningCosmWasmClient, CosmWasmClient } = require('@cosmjs/cosmwasm-stargate');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');
const { calculateFee, GasPrice } = require('@cosmjs/stargate');
const http = require('http');

const PORT = process.env.PORT || 3000;
const APP_URL = ''; 

// Ping mỗi 10 phút để không sleep 
setInterval(async () => {
    if (!APP_URL) return;
    try {
        await fetch(APP_URL);
        console.log(`🏓 Keep-alive: ${new Date().toLocaleString()}`);
    } catch (error) {
        console.log('❌ Ping failed:', error.message);
    }
}, 10 * 60 * 1000); // 10 phút

// Tạo HTTP server đơn giản
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OROSWAP BOT is running!');
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
console.clear();
console.log("\x1b[35m%s\x1b[0m", "============================================");
console.log("\x1b[36m%s\x1b[0m", "      OROSWAP BOT - VÍ KEPLR/LEAP       ");
console.log("\x1b[36m%s\x1b[0m", "               VELHUST                   ");
console.log("\x1b[35m%s\x1b[0m", "============================================\n");

// Định nghĩa trực tiếp mảng MNEMONICS, cách nhau dấu phẩy
const MNEMONICS = [
  
"radar seed prosper autumn swing taxi bone say hidden manage space tape",
"section okay empower cool tell undo swallow tent annual belt smooth foil",
"caution buddy else spread grocery stuff vast slide novel isolate moral crazy",
" hidden cannon health direct acid tone girl core jacket middle retire junior",
" cabbage tide snake hurry tackle wave hybrid source tragic system steel drama",
" jar embark logic cable valve suggest stem spoon side define believe album",
" second right erode order enhance balance wing lion protect angle another reunion",
" monster prosper outside engage focus display execute obscure decline state coyote ostrich",
" neutral world chef crazy wood dial escape network ramp swift powder egg",
" concert convince vintage strategy hello grow where turkey main conduct off metal",
" coconut sunny cabin spare focus top black panther man regular kiss knock",
" matter festival stand buddy ramp puppy token devote silent wrap visit bicycle",
" attract balance kiwi news nasty entire city tragic museum annual buffalo tiger",
" castle admit final aim cat exclude jazz aware duty wing near october",
" penalty vapor neutral indoor core weather zebra paper kind network essay black",
" capable romance blast increase promote reduce elegant below bar normal modify language",
" expand benefit degree jazz ready father oven say token praise glare museum",
" cake cheese online improve purpose vault increase order twelve waste dry erase",
" birth repeat credit size moment inspire inquiry share banana truth innocent donkey",
" subway shoot palm blast pave borrow alert coin rifle envelope jungle giant",
" such exact detect artist boss obey earth plate meadow drink dad hazard",
" venue emerge call frown current ten idle cute veteran window submit stick",
" solar warm party bomb gorilla awful soul section choice ethics useless urban",
" mechanic borrow vibrant town lizard sell bless melody plate cousin turtle tiny",
" tag melt escape ranch absorb buddy muscle laugh vehicle aisle melody merry",
" universe device fog wood crouch tower rhythm tower allow twenty crowd disagree",
" way enlist panic account metal spirit crazy buyer exact once palace obey",
" grace erosion midnight force fashion bright input unit dinosaur urge umbrella film",
" clinic forum youth quiz mom spread ill taste husband wreck ski mistake",
" core bottom cause subject main dinner afraid nut twelve donate display member",
" lonely vote cinnamon secret decrease celery crush little tag drink oxygen knee",
" vibrant walnut green season argue person term correct brother federal skill lawsuit",
" wet slow grief popular absent layer friend surround sick hazard relax gown",
" muffin bundle want expose solution armed category since hope sunset lecture push",
" own sail agree initial tide require swear grief trumpet enemy civil march",
" poet plug year add state narrow aunt whale differ helmet either turtle",
" slow artwork swear panther surround notice whisper ivory series hero answer brand",
" ski summer roast sibling later lesson frown review dash brave duty poverty",
" stuff option banner black word inhale resource bid outdoor rural display design",
" lady walk fence country old bunker little shadow hub airport typical alley",
" angle boy fetch motor liar drift calm oxygen inhale blanket fold thrive",
" security toilet rival harbor hint slow route siege vendor deposit dog horse",
" later vacant tide dentist govern dragon south upset crazy wife ritual outdoor",
" success unit lazy human scale craft century under mansion heavy during slush",
" minimum crush economy multiply custom draw salon verify thank salt thing melt",
" stumble holiday buzz barrel middle advance outdoor mix uncle citizen core sight",
" day magnet debate dolphin flavor anxiety plastic urban maid secret narrow divorce",
" table gospel occur they hair sort chunk base rich pitch like manual",
" home wasp pluck whale mutual energy top egg system organ tube satisfy",
" stuff vast sausage bachelor gold assume job shoulder shy hurdle absorb arrest",
" fashion attract depart park boil leopard dial kind absorb snow choice attend",
" exclude simple rubber program predict pistol merry ribbon reopen excuse village pudding",
" stem where matrix gallery liar kick act arch arctic three salmon orchard",
" repair obtain author course hover hundred goddess winner equal layer exist version",
" spoon miracle october limb payment pupil talk sweet bleak harbor romance move",
" pull small leisure song arrange item divert glue border aunt dinosaur faint",
" fee produce eager steak style okay crime circle quarter oppose always quiz",
" roast candy cruel cousin prepare kangaroo elevator hero return speed essence flavor",
" grief advice luxury force whisper record next prosper imitate paper mention garment",
" innocent famous couch orbit desert cancel body disease upon journey swap pet",
" pencil urge nest open describe economy bonus coach core seminar million escape",
" phrase sausage laptop brick stool luggage hello dismiss picnic tent adapt enjoy",
" devote rather name panther ginger birth upon outside ramp antique indicate cycle",
" typical tool smoke pride dance retreat gesture neck rebuild scheme dinner cinnamon",
" symptom minute farm spread siege scan tattoo loud about share human supreme",
" audit digital valve hundred bring solar lady city spare pudding casino elevator",
" method venue result menu elevator tiny priority misery soft bench left slab",
" toward brass denial soft dwarf usual tumble review bounce sea note pact",
" casino wall ugly film poverty erase word answer wave vanish captain census",
" mutual blind hope sting shy wave shock urban cart clerk merit vacuum",
" orbit multiply glance defy pilot marriage cement stock deputy want output teach",
" scene congress nominee pair wire scale call speak label robust catch lab",
" abstract once hand ball pattern problem broom arrange snap endless inflict leopard",
" marriage clinic age unknown raccoon inhale lemon hub elite globe train slush ",
" forest tired equal inspire mansion increase yard puzzle abstract banner collect across",
" oxygen token end media prevent zero era elephant lonely sausage tattoo rebuild",
" neither search cost unfair object crowd quiz reject follow buyer decrease during",
" wheat truly protect this magnet spice hurdle climb powder outside pair dizzy",
" rather onion skirt glass sister entry miss clinic mercy consider strategy kite",
" extend notable edit ball regular traffic claw army panda sniff follow divide",
" sword distance rocket rocket twenty prosper inflict runway female couple echo remember",
" weekend excite wait accuse false bleak audit flag job damp topic swing",
" urban shrimp yard elevator return issue lonely planet stable choose deal between",
" pact tourist brown bridge vicious outdoor gift blur shallow exhibit cry cram",
" hurdle mask across off buzz marble open wrong cheese random degree fat",
" civil enter hub cycle enter whisper spoil chest media invite machine satisfy",
" poem pepper unaware hope auto crash exhibit brush hobby rocket member wash",
" popular finish inherit world hurdle such shine man near buffalo first palm",
" salute few earth whip olympic unhappy pair athlete response media escape vivid",
" snack process tiny series peanut that enforce frame devote pigeon fit divorce",
" lunar document act topic brush crop vacant fame assist salute chase assume",
" rail guilt physical ensure style once trim repeat extra project refuse nerve",
" lottery ski dog hour start inflict subject fancy diary juice quote power",
" veteran charge identify leave melt matter tongue stand tide job soup soup",
" car matrix rally question submit pretty seminar brush snap table cereal long",
" derive glare jewel hazard violin oak uniform sniff smile second canoe wing",
" decrease solution code always physical father sing visa excuse course follow snake",
" wet hood october ridge decline reveal glare sauce ill uphold lion peasant",
" hover tongue lava jealous sadness arrest weapon valve early oblige loan purchase",
" enter impulse obscure nice swallow this radio tray image toy pear sound",
" dutch stock outer response rubber estate true exchange name welcome yard pigeon",
" melt blast fuel hazard leave mosquito pilot wool ladder dynamic hand foot",
" boost flame guide fuel kite world small holiday peanut peanut fun hello",
" key brain shy tone state garment address stuff collect saddle hard normal",
" argue effort clerk fashion slot whale world embrace jungle direct nothing search",
" arrive cable second silk slender that brand monster phrase state useless ripple",
" mistake hurt van melt alcohol alarm bullet excuse train denial snack emerge",
" woman save figure bachelor team spell above shoot tape salmon luxury praise",
" eternal little ticket shield gospel flame stick enact grace scissors basket goose",
" disease below narrow another nest test rebuild people balance total surface usage",
" employ title tiny mail polar valley sleep poverty purity obtain gaze pig",
" moon gallery connect rather decline camera odor unaware blue siren protect receive",
" pave favorite joy image gospel stem render discover jaguar tell all clinic",
" frost depend unveil burger second dentist lonely medal daring vicious typical candy",
" enforce arch interest avoid repeat flight diamond achieve flee eager envelope hedgehog",
" empower silent that dawn mixed forum planet clutch deliver promote benefit copper",
" water grid ceiling rotate employ illness circle census laundry finger visual finger",
" buyer leopard shuffle diagram autumn staff rib twelve stone odor virtual refuse",
" garage silent umbrella candy window fiction mesh grape matrix oval void flee",
" exclude street mirror scrub because you practice space lion embody elite skill",
" term craft clog hand demise bless outdoor warrior call cost lens enroll",
" degree desk improve verb blood guess essence prize document siege deliver mango",
" host city pear choice doll model duty ritual motor nephew time remain",
" vast check carbon shine result symbol right poet mother metal common cinnamon",
" script leopard icon pelican chief cat garage evidence lesson great drink viable",
" stool dash mother machine demand coconut depth home kidney arrest flush practice",
" rubber scale burger naive clip turtle possible awkward sunset wolf fluid arm",
" spirit steel eyebrow tattoo rural rhythm design front exhaust upper roof rapid",
" sample auction electric upset video decrease hockey blast share work dance make",
" volcano million oyster usage hello category rubber blush title grief regret deny",
" hedgehog carbon boss enough shaft toy climb jazz capital rabbit situate liquid",
" rib sister mandate scout loan armed gloom parade sponsor foster rabbit core",
" toilet debate knife cycle soul ready tongue salt mimic rice warfare either",
"priority record prison push civil spatial figure grace try kidney cluster jeans",
"circle diamond staff caution device wedding act violin board fruit health brief",
"mobile broken gentle right scrub skin safe fiber top room joke doll",
"duty clever evolve either catalog home power mask uniform enforce gift future",
"used athlete love whisper visit dynamic antique trust bunker essence nerve noise",
"subway attack vocal thank test animal blade relax power close magic history",
"outer door curve cook position entry blur patient end tuna ability update",
"worry goat tape almost battle sausage grief warfare current entire liberty meat",
"purchase reject cream crawl taxi inherit invite digital day fox total cousin",
"exchange kid quick whale lobster whip ribbon street use emerge guess fall",
"exchange paddle all finger buddy divide sight dirt such use praise dinosaur",
"tent awful negative clutch rough upper right robot refuse brave calm rigid",
" style thank column allow meadow evil cloth treat bus donkey cram cannon",
" toddler leave hamster awful broccoli kingdom gossip praise mouse rent fossil rail",
" win vicious phrase merit charge laundry fat liar board mandate unhappy sugar",
" ketchup divorce awake alarm course chat anchor olympic fragile idea toilet way",
" reason edit silk legend fly ride gesture ribbon sniff engage hip odor",
" blade cricket motor fence autumn mountain like improve canvas oyster skirt just",
" illness mom fiscal bonus sell crucial fuel elephant will state bunker dilemma",
" talk idle report brave brief crater oil path year mail sketch mask",

].map(m => m.trim());

if (MNEMONICS.length === 0 || (MNEMONICS.length === 1 && MNEMONICS[0] === '')) {
    console.error("❌ LỖI: Không tìm thấy mnemonic nào. Vui lòng thêm mnemonic vào mảng MNEMONICS trong code.");
    process.exit(1);
}

console.log(`✅ Đã load ${MNEMONICS.length} ví trực tiếp từ code`);

const CONFIG = {
    rpcEndpoint: "https://public-zigchain-testnet-rpc.numia.xyz", // Đảm bảo URL chính xác và không có khoảng trắng thừa
    chainId: "zig-test-2",
    zigDenom: "uzig",
    oroDenom: "coin.zig10rfjm85jmzfhravjwpq3hcdz8ngxg7lxd0drkr.uoro",
    swapContract: "zig15jqg0hmp9n06q0as7uk3x9xkwr9k3r7yh4ww2uc0hek8zlryrgmsamk4qg",
    gasPrice: GasPrice.fromString("0.025uzig"),
    minZigBalance: 2.0, // Số dư ZIG tối thiểu cần có để thực hiện chu kỳ
    targetBatchSize: 20  // Số lượng ví đủ điều kiện muốn chạy cùng lúc
};

// --- Hàm tiện ích ---

function randomAmount() {
    const min = 0.0002;
    const max = 0.0009;
    const value = Math.random() * (max - min) + min;
    return parseFloat(value.toFixed(4));
}

function randomLiqValueAsString() {
  const min = 0.00001;
  const max = 0.00005;
  const random = Math.random() * (max - min) + min;
  return random.toFixed(5);
}

const delay = async (ms) => {
    process.stdout.write(`\r⏳ Đang chờ ${ms / 1000} giây... `);
    await new Promise(res => setTimeout(res, ms));
    console.log("✅ Hoàn thành chờ");
};

// --- Hàm tương tác với blockchain ---

async function getBalance(mnemonic, denom) {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "zig" });
    const [account] = await wallet.getAccounts();
    const client = await CosmWasmClient.connect(CONFIG.rpcEndpoint);
    const balance = await client.getBalance(account.address, denom);
    return { address: account.address, amount: balance.amount, formatted: Number(balance.amount) / 1e6 };
}

async function getBeliefPrice(denom, amount) {
    const client = await CosmWasmClient.connect(CONFIG.rpcEndpoint);
    try {
        const sim = await client.queryContractSmart(CONFIG.swapContract, {
            simulation: {
                offer_asset: {
                    amount: amount.toString(),
                    info: { native_token: { denom: denom } }
                }
            }
        });
        // Sử dụng BigInt để tính toán chính xác belief_price
        const beliefPrice = (BigInt(amount) * BigInt(1e6)) / BigInt(sim.return_amount);
        return (Number(beliefPrice) / 1e6).toFixed(18);
    } catch (error) {
        console.error("Lỗi khi lấy belief price:", error.message);
        // Trả về một giá trị mặc định hợp lý nếu không lấy được
        return "1.0";
    }
}

async function swap(mnemonic, amount, fromDenom, toDenom) {
    try {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "zig" });
        const [account] = await wallet.getAccounts();
        const client = await SigningCosmWasmClient.connectWithSigner(CONFIG.rpcEndpoint, wallet, {
            gasPrice: CONFIG.gasPrice, chainId: CONFIG.chainId
        });

        const baseAmount = Math.floor(amount * 1e6).toString();
        const beliefPrice = await getBeliefPrice(fromDenom, baseAmount);
        const fee = calculateFee(320000, CONFIG.gasPrice);

        const msg = {
            swap: {
                belief_price: beliefPrice,
                max_spread: "0.005", // 0.5% spread
                offer_asset: {
                    amount: baseAmount,
                    info: { native_token: { denom: fromDenom } }
                }
            }
        };

        const result = await client.execute(account.address, CONFIG.swapContract, msg, fee, "Swap", [
            { denom: fromDenom, amount: baseAmount }
        ]);

        const fromName = fromDenom === CONFIG.zigDenom ? "ZIG" : "ORO";
        const toName = toDenom === CONFIG.zigDenom ? "ZIG" : "ORO";
        console.log(`\n✅ Swap ${fromName} → ${toName} thành công! TX: ${result.transactionHash}`);
        // Ghi chú: Liên kết explorer có thể cần điều chỉnh nếu định dạng khác
        // console.log(`🔍 https://zigscan.org/tx/${result.transactionHash}`);
    } catch (e) {
        console.error(`❌ Swap thất bại (${mnemonic.slice(0, 10)}...):`, e.message);
    }
}

// Lấy tỷ lệ pool hiện tại (ZIG/ORO)
async function getPoolRatio() {
    const client = await CosmWasmClient.connect(CONFIG.rpcEndpoint);
    try {
        const pool = await client.queryContractSmart(CONFIG.swapContract, { pool: {} });

        const oroAsset = pool.assets.find(a => a.info.native_token?.denom === CONFIG.oroDenom);
        const zigAsset = pool.assets.find(a => a.info.native_token?.denom === CONFIG.zigDenom);

        if (!oroAsset || !zigAsset) {
             throw new Error("Không tìm thấy tài sản ORO hoặc ZIG trong pool");
        }

        const oroAmount = Number(oroAsset.amount);
        const zigAmount = Number(zigAsset.amount);

        const ratio = zigAmount / oroAmount; // số ZIG cho 1 ORO
        return { oroAmount, zigAmount, ratio };
    } catch (error) {
         console.error("Lỗi khi lấy tỷ lệ pool:", error.message);
         // Trả về tỷ lệ mặc định nếu lỗi
         return { ratio: 1.0 };
    }
}

async function addLiquidity(mnemonic, amountUoro, _amountUzig) {
    try {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "zig" });
        const [account] = await wallet.getAccounts();
        const client = await SigningCosmWasmClient.connectWithSigner(CONFIG.rpcEndpoint, wallet, {
            gasPrice: CONFIG.gasPrice, chainId: CONFIG.chainId
        });

        // Query pool để tính đúng tỷ lệ
        const { ratio } = await getPoolRatio();

        // Convert ORO thành base unit
        const uoroAmount = Number(amountUoro);
        const uoroBaseAmount = Math.floor(uoroAmount * 1e6);

        // Tính lượng ZIG tương ứng theo tỷ lệ pool
        const uzigRequired = uoroAmount * ratio;
        const uzigBaseAmount = Math.floor(uzigRequired * 1e6);

        // Nếu ra 0 thì bỏ qua
        if (uoroBaseAmount <= 0 || uzigBaseAmount <= 0) {
            console.log("⚠️ Bỏ qua vì số lượng quá nhỏ.");
            return;
        }

        const msg = {
            provide_liquidity: {
                assets: [
                    {
                        amount: uoroBaseAmount.toString(),
                        info: { native_token: { denom: CONFIG.oroDenom } }
                    },
                    {
                        amount: uzigBaseAmount.toString(),
                        info: { native_token: { denom: CONFIG.zigDenom } }
                    }
                ],
                slippage_tolerance: "0.05" // 5% slippage tolerance
            }
        };

        const funds = [
            { denom: CONFIG.oroDenom, amount: uoroBaseAmount.toString() },
            { denom: CONFIG.zigDenom, amount: uzigBaseAmount.toString() }
        ];

        const fee = calculateFee(320000, CONFIG.gasPrice); // Tăng gas cho liquidity

        const result = await client.execute(account.address, CONFIG.swapContract, msg, fee, "Provide Liquidity", funds);

        console.log(`\n✅ Cung cấp thanh khoản cặp ORO/ZIG thành công! TX: ${result.transactionHash}`);
        // console.log(`🔍 https://zigscan.org/tx/${result.transactionHash}`);
    } catch (err) {
        console.error("❌ Thêm thanh khoản thất bại:", err.message);
    }
}

// --- Hàm xử lý logic bot ---

// Hàm kiểm tra số dư cho một ví
async function checkWalletBalance(mnemonic, walletIndex) {
    try {
        const balanceInfo = await getBalance(mnemonic, CONFIG.zigDenom);
        const isEligible = balanceInfo.formatted >= CONFIG.minZigBalance;
        console.log(`📱 Ví ${walletIndex + 1} (${mnemonic.slice(0, 10)}...) - ZIG: ${balanceInfo.formatted.toFixed(6)}, đủ điều kiện: ${isEligible ? 'Có' : 'Không'}`);
        return { mnemonic, index: walletIndex, isEligible, balance: balanceInfo.formatted };
    } catch (err) {
        console.error(`❌ Kiểm tra số dư ví ${walletIndex + 1} thất bại:`, err.message);
        // Giả định không đủ điều kiện nếu có lỗi
        return { mnemonic, index: walletIndex, isEligible: false, balance: 0 };
    }
}

// Hàm xử lý các hoạt động (swap, addLiq) cho một ví đủ điều kiện
async function processEligibleWallet(walletData) {
    const { mnemonic, index } = walletData;
    console.log(`\n🚀 Bắt đầu xử lý ví đủ điều kiện ${index + 1}: ${mnemonic.slice(0, 10)}...`);

    // Tạo giá trị ngẫu nhiên mới cho từng ví để đa dạng hóa
    const localZigAmount = randomAmount();
    const localOroAmount = randomAmount();
    const localLiqOro = randomLiqValueAsString();
    // const localLiqZig = randomLiqValueAsString(); // Không cần vì được tính toán

    for (let i = 0; i < 50; i++) {
        await swap(mnemonic, localZigAmount, CONFIG.zigDenom, CONFIG.oroDenom);
        await delay(5000); // 5 giây
    }

    // for (let i = 0; i < 100; i++) {
    //     await swap(mnemonic, localOroAmount, CONFIG.oroDenom, CONFIG.zigDenom);
    //     await delay(5000); // 5 giây
    // }

    for (let i = 0; i < 200; i++) {
        console.log("\n💧 Đang thêm thanh khoản...");
        await addLiquidity(mnemonic, localLiqOro, "0"); // LIQ_ZIG được tính toán bên trong
        await delay(5000); // 5 giây
    }
    console.log(`\n🏁 Hoàn thành xử lý ví ${index + 1}: ${mnemonic.slice(0, 10)}...`);
}

async function runBot() {
    for (let cycleCount = 0; cycleCount < 1000000000; cycleCount++) {
        console.log(`\n=========== CHU KỲ ${cycleCount + 1} ===========`);
        console.log(`🕒 Bắt đầu xử lý toàn bộ ${MNEMONICS.length} ví...`);

        let processedCount = 0;
        let batch = [];

        // Duyệt từng ví theo thứ tự
        for (const [index, mnemonic] of MNEMONICS.entries()) {
            try {
                const balanceInfo = await getBalance(mnemonic, CONFIG.zigDenom);
                const isEligible = balanceInfo.formatted >= CONFIG.minZigBalance;

                console.log(`📱 Ví #${index + 1} (${mnemonic.slice(0, 10)}...) - ZIG: ${balanceInfo.formatted.toFixed(6)} | Đủ điều kiện: ${isEligible ? '✅' : '❌'}`);

                if (isEligible) {
                    batch.push({ mnemonic, index });
                }

                // Nếu đã đủ 20 ví trong batch → xử lý ngay
                if (batch.length >= CONFIG.targetBatchSize) {
                    console.log(`\n🚀 Đã tích lũy đủ ${CONFIG.targetBatchSize} ví → Bắt đầu xử lý batch...`);
                    await Promise.all(batch.map(walletData => processEligibleWallet(walletData)));
                    console.log(`✅ Hoàn thành batch gồm ${batch.length} ví.`);
                    batch = []; // Reset batch
                }

                processedCount++;

                // Delay nhỏ giữa các ví để tránh spam RPC
                if (index < MNEMONICS.length - 1) {
                    await delay(1000); // 1 giây giữa các ví
                }

            } catch (err) {
                console.error(`❌ Lỗi khi xử lý ví #${index + 1}:`, err.message);
                processedCount++;
            }
        }

        // Sau khi duyệt hết danh sách, nếu vẫn còn ví trong batch → xử lý nốt
        if (batch.length > 0) {
            console.log(`\n📌 Xử lý nốt ${batch.length} ví còn lại (không đủ 20 nhưng là cuối danh sách)...`);
            await Promise.all(batch.map(walletData => processEligibleWallet(walletData)));
            console.log(`✅ Hoàn thành xử lý nốt ${batch.length} ví cuối.`);
        }

        console.log(`\n🎉 CHU KỲ ${cycleCount + 1} HOÀN TẤT: Đã xử lý xong toàn bộ ${processedCount}/${MNEMONICS.length} ví.`);
        
        // Tùy chọn: chờ trước khi bắt đầu chu kỳ mới
        console.log(`⏳ Chờ 5 phút trước khi bắt đầu chu kỳ ${cycleCount + 2}...`);
        await delay(5 * 60 * 1000); // 5 phút
    }

    console.log("Bot đã hoàn thành tất cả các chu kỳ.");
}

// Start the bot
runBot().catch(err => {
    console.error("❌ Bot gặp lỗi nghiêm trọng:", err);
    process.exit(1);
});