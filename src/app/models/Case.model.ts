export interface Case {
    case_number: string;
    title: string;
    category: string;
    owner: string;
    SR_wait_state: string;
    SR_type: string;
    status: string;
    update_sme?: Date;
    se_note?: string;
    close_date_se?: Date;
    update_date_se?: Date;
}
