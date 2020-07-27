import IStorageBaseModel from '../IStorageBaseModel';

export type GuideViewMode = 'sequential' | 'minimum' | 'all';

export interface ISettingValue {
    isForceDarkTheme: boolean;
    isOnAirTabListView: boolean;
    isOnAirHalfWidthDisplayed: boolean;
    onAirM2TSViewURLScheme: string | null;
    guideMode: GuideViewMode;
    guideLength: number;
    isGuideHalfWidthDisplayed: boolean;
    isEnableDisplayForEachBroadcastWave: boolean;
    reservesLength: number;
    isReservesHalfWidthDisplayed: boolean;
    recordedLength: number;
    isRecordedHalfWidthDisplayed: boolean;
    isPreferredPlayingOnWeb: boolean;
    shouldUseRecordedViewURLScheme: boolean;
    recordedViewURLScheme: string | null;
    shouldUseRecordedDownloadURLScheme: boolean;
    recordedDownloadURLScheme: string | null;
    searchLength: number;
    isSearchHalfWidthDisplayed: boolean;
    isEnableAutoScrollWhenEditingRule: boolean;
    isEnableCopyKeywordToDirectory: boolean;
    isCheckAvoidDuplicate: boolean;
    isEnableEncodingSettingWhenCreateRule: boolean;
    isCheckDelTs: boolean;
    rulesLength: number;
}

export default interface ISettingStorageModel extends IStorageBaseModel<ISettingValue> {}