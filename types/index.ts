// UserData
export interface UserData {
    username: string;
    nickname: string;
    isUpdatedNickname: boolean;
    point: number;
    score: number;
    email: string;
    phone: string;
    remark: string | null;
    isDeposited: boolean;
    isPhoneVerified: boolean;
    msgCount: number;
    level: number;
    vip_transfer_credit: number;
    vip_expired_at: string;
    downCounts: number;
    registerTime: string;
    transferNotify: number;
    isRescueScore: boolean;
}

// BankInfo

export interface PayRange {
    payRange: number[];
    redirect: boolean;
}
  
export interface EventPay {
    [amount: string]: number;  // Key is the amount threshold, value is the multiplier
}

export interface BankInfo {
    bankCode: string;
    bankname: string;
    banktype: string;
    pay: PayRange;
    amount: string[];
    eventPay: EventPay;
}

// TransferRecord
export interface TransferRecord {
    id: number;
    userid: number;
    name: string;
    to_user_id: number;
    to_code: string | null;
    to_name: string;
    status: number;
    created_at: string;
    updated_at: string;
}

// PromoLink
export interface PromoLink {
    url: string;
    code: string;
}

// Login
export interface LoginRequest {
    action: string;
    userid: number;
    username: string;
    password: string;
}

export interface LoginResponse {
    ErrorCode: number;
    ErrorMsg: string;
    userid?: number;
    userData?: UserData;
    access_token?: string;
    token_type?: string;
    expires_in?: number;
    promoLink?: PromoLink;
}

// Logout
export interface LogoutRequest {
    action: string;
    userid: number;
    token: string;
}

export interface LogoutResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// Register
export interface RegisterRequest {
    action: string;
    username: string;
    password: string;
    password_confirmation: string;
    email: string;
    cellphone: string;
    code: string;
    PromoLinkName: string;
}

export interface RegisterResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// RegisterByPhone
export interface RegisterByPhoneRequest {
    cellphone: string;
    code: string;
    password_confirmation: string;
    password: string;
    username: string;
}

export interface RegisterByPhoneResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// VerifyMsg
export interface VerifyMsgRequest {
    phone: string;
    type: string;
}

export interface VerifyMsgResponse {
    ErrorCode: number;
    ErrorMsg: string;
    data?: {
        code: string;
    }
}

// ResetPasswordBySMS
export interface ResetPasswordBySMSRequest {
    action: string;
    phone: string;
    code: string;
    password: string;
    password_confirmation: string;
}

export interface ResetPasswordBySMSResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// LoginJWT
export interface LoginJWTRequest {
    username: string;
    password: string;
}

export interface LoginJWTResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// LogoutJWT
export interface LogoutJWTRequest {
}

export interface LogoutJWTResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// Me JWT
export interface GetMeJWTRequest {
}

export interface GetMeJWTResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// Renew JWT
export interface RenewJWTRequest {
}

export interface RenewJWTResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetBalance
export interface GetBalanceRequest {
    action: string;
}

export interface GetBalanceResponse {
    ErrorCode: number;
    ErrorMsg: string;
    data?: UserData;
}

// GetNewsList
export interface GetNewsListRequest {
    action: string;
}

export interface GetNewsListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetEventList
export interface GetEventListRequest {
    action: string;
}

export interface GetEventListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetGameList
export interface GetGameListRequest {
    action: string;
    game_type: string;
}

export interface GetGameListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetGameSlots
export interface GetGameSlotsRequest {
    action: string;
}

export interface GetGameSlotsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetGameStatistics
export interface GetGameStatisticsRequest {
    action: string;
}

export interface GetGameStatisticsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetGameKinds
export interface GetGameKindsRequest {
    action: string;
}

export interface GetGameKindsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetGameLists
export interface GetGameListsRequest {
    action: string;
    userid: number;
    token: string;
}

export interface GetGameListsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetRankList
export interface GetRankListRequest {
    action: string;
}

export interface GetRankListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetRichList
export interface GetRichListRequest {
    action: string;
}

export interface GetRichListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetVipSetting
export interface GetVipSettingRequest {
    action: string;
}

export interface GetVipSettingResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetFamilyList
export interface GetFamilyListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetFamilyRank
export interface GetFamilyRankResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetDefaultSetting
export interface GetDefaultSettingResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// CreateFamily
export interface CreateFamilyRequest {
    title: string;
}

export interface CreateFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetDeprecatedFamilyUserList
export interface GetDeprecatedFamilyUserListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetMyFamily
export interface GetMyFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UpdateFamily
export interface UpdateFamilyRequest {
    title: string;
    description: string;
}

export interface UpdateFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UpgradeFamily
export interface UpgradeFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// ApplyFamily
export interface ApplyFamilyRequest {
    userid: string;
    token: string;
}

export interface ApplyFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// CancelApplyFamily
export interface CancelApplyFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// RejectInviteFamily
export interface RejectInviteFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// InviteFamily
export interface InviteFamilyRequest {
    inviteNickname: string;
}

export interface InviteFamilyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UpdateRole
export interface UpdateRoleRequest {
    adjustUserId: number;
    role: string;
}

export interface UpdateRoleResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// KickUser
export interface KickUserRequest {
    kickUserId: number;
}

export interface KickUserResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// AllowJoin
export interface AllowJoinRequest {
    allowUserId: number;
}

export interface AllowJoinResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// CancelInvite
export interface CancelInviteRequest {
    cancelUserId: number;
}

export interface CancelInviteResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

export interface RewardItem {
  balance: number;
  score: number;
}

export interface RewardRequest {
  rewardList: {
    [userId: string]: RewardItem;
  };
}

export interface RewardResponse {
  ErrorCode: number;
  ErrorMsg: string;
}

// RejectApply
export interface RejectApplyRequest {
    rejectUserId: number;
}

export interface RejectApplyResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// Accept
export interface AcceptResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// ContributeBalance
export interface ContributeBalanceRequest {
    amount: number;
}

export interface ContributeBalanceResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// ContributeScore
export interface ContributeScoreRequest {
    amount: number;
}

export interface ContributeScoreResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetBankCodeLists
export interface GetBankCodeListsRequest {
    action: string;
    userid: number;
    token: string;
}

export interface GetBankCodeListsResponse {
    ErrorCode: number;
    ErrorMsg: string;
    detail?: BankInfo[];
}

// Deposit
export interface DepositRequest {
    action: string;
    userid: number;
    token: string;
    bankCode: string;
    orderAmount: number;
    zfbLicense: string;
    pay_bank: string;
}

export interface DepositResponse {
    ErrorCode: number;
    ErrorMsg: string;
    OrderId?: string;
    cate?: string;
}

// PlayGame
export interface PlayGameRequest {
    action: string;
    userid: number;
    token: string;
    skey: string;
    gameId: number;
    game_type: string;
}

export interface PlayGameResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetDGDemoUrl
export interface GetDGDemoUrlRequest {
    action: string;
    game_type: string;
    skey: string;
}

export interface GetDGDemoUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetDGGameUrl
export interface GetDGGameUrlRequest {
    action: string;
    userid: number;
    token: string;
    skey: string;
    gameid: number;
    game_type: string;
}

export interface GetDGGameUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetDSDemoUrl
export interface GetDSDemoUrlRequest {
    action: string;
    game_type: string;
    skey: string;
    gameid: number;
}

export interface GetDSDemoUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetDSGameUrl
export interface GetDSGameUrlRequest {
    action: string;
    userid: number;
    token: string;
    skey: string;
    gameid: number;
    game_type: string;
    type: string;
}

export interface GetDSGameUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetQTGameUrl
export interface GetQTGameUrlRequest {
    action: string;
    userid: number;
    token: string;
    skey: string;
    gameid: number;
    game_type: string;
    type: string;
}

export interface GetQTGameUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetBNGDemoUrl
export interface GetBNGDemoUrlRequest {
    action: string;
    game_type: string;
    skey: string;
    gameId: number;
}

export interface GetBNGDemoUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}  

// GetBNGGameUrl
export interface GetBNGGameUrlRequest {
    action: string;
    userid: number;
    token: string;
    skey: string;
    gameId: number;
    game_type: string;
}

export interface GetBNGGameUrlResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// CrazyGold
export interface GetJackpotResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

export interface GetResultDetailRequest {
    betResultId: number;
}

export interface GetResultDetailResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetProcessedTransferRecords
export interface GetProcessedTransferRecordsRequest {
    action: string;
    userid: string;
    token: string;
    start: string;
    end: string;
    page: number;
    perPage: number;
}

export interface GetProcessedTransferRecordsResponse {
    ErrorCode: number;
    ErrorMsg: string;
    data?: TransferRecord[];
}

// GetUnprocessedTransferRecords
export interface GetUnprocessedTransferRecordsRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetUnprocessedTransferRecordsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetTransferAmounts
export interface GetTransferAmountsRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetTransferAmountsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// TransferTo
export interface TransferToRequest {
    action: string;
    userid: string;
    token: string;
    nickname: string;
    amount: number;
    code: string;
}

export interface TransferToResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// AgreedTransferRecord
export interface AgreedTransferRecordRequest {
    action: string;
    userid: string;
    token: string;
    id: number;
}

export interface AgreedTransferRecordResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// RefusedTransferRecord
export interface RefusedTransferRecordRequest {
    action: string;
    userid: string;
    token: string;
    id: number;
}

export interface RefusedTransferRecordResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetFreezeRecords
export interface GetFreezeRecordsRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetFreezeRecordsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// WriteMessage
export interface WriteMessageRequest {
    action: string;
    userid: string;
    token: string;
    MgsTitle: string;
    NeiRong: string;
    Target: number;
    ShouXinRen: string;
    msg_reply: string;
}

export interface WriteMessageResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// ReadMessage
export interface ReadMessageRequest {
    action: string;
    userid: string;
    token: string;
    ZhanNeiXinid: number;
    FaXinRenId: number;
    ShouXinRenId: number;
}

export interface ReadMessageResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetReceivedMessages
export interface GetReceivedMessagesRequest {
    action: string;
    userid: string;
    token: string;
    MgsTitle: string;
    NeiRong: string;
    Target: number;
    ShouXinRen: string;
    msg_reply: string;
    ReadFlag: number;
}

export interface GetReceivedMessagesResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetSentMessages
export interface GetSentMessagesRequest {
    action: string;
    userid: string;
    token: string;
    MgsTitle: string;
    NeiRong: string;
    Target: number;
    ShouXinRen: string;
    msg_reply: string;
    PageSize: number;
    Page: number;
}

export interface GetSentMessagesResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// DeleteMessage
export interface DeleteMessageRequest {
    action: string;
    userid: string;
    token: string;
    ZhanNeiXinid: number;
}

export interface DeleteMessageResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetMemberInfo
export interface GetMemberInfoRequest {
    action: string;
    userid: string;
    token: string;
    limitMoney: string;
}

export interface GetMemberInfoResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UpdateMemberInfo
export interface UpdateMemberInfoRequest {
    action: string;
    userid: string;
    token: string;
    oldPwd: string;
    password: string;
    password_confirmation: string;
    nickname: string;
    remark: string;
    cellphone: string;
}

export interface UpdateMemberInfoResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetUserFundList
export interface GetUserFundListRequest {
    action: string;
    userid: string;
    token: string;
    start: string;
    end: string;
    page: number;
    perPage: number;
}

export interface GetUserFundListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetActivityLogList
export interface GetActivityLogListRequest {
    action: string;
    userid: string;
    token: string;
    start: string;
    end: string;
}   

export interface GetActivityLogListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// AddFavorite
export interface AddFavoriteRequest {
    action: string;
    userid: string;
    token: string;
    gkid: number;
}

export interface AddFavoriteResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// RemoveFavorites
export interface RemoveFavoritesRequest {
    action: string;
    userid: string;
    token: string;
    gkid: number;
}

export interface RemoveFavoritesResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GameList
export interface GameListRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GameListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// ActivityReward
export interface ActivityRewardRequest {
    action: string;
    userid: string;
    token: string;
    act: number;
}

export interface ActivityRewardResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetActivityEventList
export interface GetActivityEventListRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetActivityEventListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetMissionList
export interface GetMissionListRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetMissionListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetVipSignInInfo
export interface GetVipSignInInfoRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetVipSignInInfoResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// PlayRoulette
export interface PlayRouletteRequest {
    action: string;
    userid: string;
    token: string;
}

export interface PlayRouletteResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// VipSignIn
export interface VipSignInRequest {
    action: string;
    userid: string;
    token: string;
}

export interface VipSignInResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetFriendList
export interface GetFriendListRequest {
    action: string;
    userid: string;
    token: string;
    friendType: number;
}

export interface GetFriendListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// RelieveBlockFriendById
export interface RelieveBlockFriendByIdRequest {
    action: string;
    userid: string;
    token: string;
    uf_id: string;
}

export interface RelieveBlockFriendByIdResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// DeleteFriend
export interface DeleteFriendRequest {
    action: string;
    userid: string;
    token: string;
    uf_id: string;
}

export interface DeleteFriendResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// BlockFriendById
export interface BlockFriendByIdRequest {
    action: string;
    userid: string;
    token: string;
    uf_id: string;
    blockUserId: number;
}

export interface BlockFriendByIdResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// AddFriend
export interface AddFriendRequest {
    action: string;
    userid: string;
    token: string;
    nickname: string;
}

export interface AddFriendResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// RefuseFriendRequest
export interface RefuseFriendRequestRequest {
    action: string;
    userid: string;
    token: string;
    uf_id: string;
}

export interface RefuseFriendRequestResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// AgreeFriendRequest
export interface AgreeFriendRequestRequest {
    action: string;
    userid: string;
    token: string;
    uf_id: string;
}

export interface AgreeFriendRequestResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// SearchFriend
export interface SearchFriendRequest {
    action: string;
    userid: string;
    token: string;
    nickname: string;
}

export interface SearchFriendResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetBeInvitedFriendList
export interface GetBeInvitedFriendListRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetBeInvitedFriendListResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// GetPromoLinks
export interface GetPromoLinksRequest {
    action: string;
    userid: string;
    token: string;
}

export interface GetPromoLinksResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// CreatePromoLink
export interface CreatePromoLinkRequest {
    action: string;
    userid: string;
    token: string;
    PL_rebate: string;
    PL_isproxy: string;
    PL_remark: string;
    PL_note: string;
    PL_notOpenDown: string;
    PL_status: string;
    PL_host: string;
}

export interface CreatePromoLinkResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UserReport
export interface UserReportRequest {
    action: string;
    userid: string;
    token: string;
    typeset: string;
    qry_DateStart: string;
    qry_DateEnd: string;
    qry_UserName: string;
}

export interface UserReportResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UserBetRecord
export interface UserBetRecordRequest {
    action: string;
    userid: string;
    token: string;
    qry_DateStart: string;
    qry_DateEnd: string;
    qry_game: string;
    qry_rtype: string;
    qry_UserName: string;
    rec_perpage: number;
    page: number;
}

export interface UserBetRecordResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

// UserFunds
export interface UserFundsRequest {
    action: string;
    userid: string;
    token: string;
    type: string;
    qry_DateStart: string;
    qry_DateEnd: string;
    qry_UserName: string;
    typeset: string;
}

export interface UserFundsResponse {
    ErrorCode: number;
    ErrorMsg: string;
}

